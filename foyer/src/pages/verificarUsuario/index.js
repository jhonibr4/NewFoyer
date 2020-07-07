import React, { useEffect , useState } from 'react';
import { View , Text , TouchableOpacity, FlatList, Alert } from 'react-native';
import style from './style';
import Headers from '../../components/Header';
import glb from '../../components/global';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api'
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';


export default function verificarUsuario() {
    const [ confirmar , setConfirmar ] = useState(false);
    const [ newStatus , setNewstatus ] = useState('');
    const [ id_mora , setIdmora ] = useState('');
    const [ id_conds , setIdcond ] = useState('');
    const [ users , setUsuarios ] = useState([]);
    const [ status , setStatus ] = useState('Aprovado');
    const navigation = useNavigation();

    async function loadUsuario(){
        const id_cond = await AsyncStorage.getItem('id_cond');
        setIdcond(id_cond)
        const data = { status }
        const usuarios = await api.post('verificarMora', data,{
            headers:{
                authorization:id_cond
            }
            
        })
        setUsuarios(usuarios.data)
        console.log(users)
    } 

    function ConfirmarUser( user ){
        
        Alert.alert(
            "Confirmação",
            "Você Tem certeza que deseja aceitar esse usuário para seu ambiente no Foyer ?",
            [
                {text:"Ok", onPress: () => Aceitar( user )},
                {text:"Cancelar", onPress: () => setConfirmar(false)}
            ]
        )
    }
    
    async function Aceitar( user ){
        const id_mora = user.id_mora
        const newStatus = "Aprovado"
        const data = { newStatus }
        
        const alterar = await api.put('statusMora', data,{
            headers:{
                authorization:id_mora
            }
        })
        console.log(alterar)
        setNewstatus('')
        loadUsuario()
    }
    function RejeitarUser( user ){
        
        Alert.alert(
            "Confirmação",
            "Você Tem certeza que deseja rejeitar esse usuário para seu ambiente no Foyer ?",
            [
                {text:"Ok", onPress: () => Rejeitar( user )},
                {text:"Cancelar", onPress: () => setConfirmar(false)}
            ]
        )
    }
    async function Rejeitar( user ){
        const id_mora = user.id_mora
        const newStatus = "Rejeitado"
        const data = { newStatus }
    
        const alterar = await api.put('statusMora', data,{
            headers:{
                authorization:id_mora
            }
        })
        console.log(alterar)
        setNewstatus('')
        loadUsuario()
    }

    useEffect(() => {
        loadUsuario();
    },[])
 return (
   <View style={glb.container}>
       <Headers/>
       <FlatList
        data={users}
        keyExtractor={user => String(user.id_mora)}
        renderItem={({ item: user}) =>(
            <View>
                <View style={style.viewProfile}>
                <Avatar containerStyle={style.avatar}
                    avatarStyle={style.iconAvatar} 
                    rounded icon={{ name: 'person' }}
                    source={{uri: `http://192.168.101.46:3333/fotoperfil/${user.imgmora}`}}
                    size="large"
                />
                <View style={style.info}>
                <Text style={style.nome}>Nome: {user.nomemora}</Text>
                    <View style={style.infoApart}>
                    <Text style={style.textBloco}>Bloco: {user.blocomora}</Text>
                    <Text style={style.textApart}>Apartamento: {user.apartmora}</Text>
                    </View>
                </View>
            </View>
                <View style={style.lineButton}>
                <TouchableOpacity style={style.buttonAccept} onPress={() => ConfirmarUser(user)}>
                    <Text style={style.textButton}>Aceitar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonReject} onPress={() => RejeitarUser(user)}>
                    <Text style={style.textButton} >Rejeitar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonInfo} onPress={() => navigation.navigate('Pagina Informacoes', { user })}>
                    <Icon name="info" size={24} color="#FFF"/>
                </TouchableOpacity>
                </View>
            </View>
        )}
       />
    </View>
  );
}