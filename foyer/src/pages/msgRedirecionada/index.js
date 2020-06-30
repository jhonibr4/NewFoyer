import React , { useState, useEffect }from 'react';
import { View , Text , ScrollView , TouchableOpacity , Alert} from 'react-native';
import style from './style';
import { Avatar } from 'react-native-elements';
import glb from '../../components/global'
import Header from '../../components/Header'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Input } from 'react-native-elements';
import TextArea from 'react-native-textarea';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api'


export default function msgRedirecionada() {

    const navigation = useNavigation();
    const route = useRoute();
    const perfil = route.params.mensagem
    
    const [ nome , setNome ] = useState('');
    const [ id_envio , setIdenvio ] = useState('');
    const [ id_recebe , setIdrecebe ] = useState('');
    const [ msg , setMensagem ] = useState('');
    const [ assunto , setAssunto ] = useState('');
    const [ imgperfil , setImgPerfil ] = useState('');

    async function carregarPerfil(){
        const id_conds = await AsyncStorage.getItem('id_cond');
        const id_mora = await AsyncStorage.getItem('id_mora');
        if(id_mora === null){
            setIdenvio(id_conds)
        } else {
            setIdenvio(id_mora)
        }
        setNome(perfil.nome)
        setIdrecebe(perfil.id_envio)
        setImgPerfil(perfil.imgperfil)
        console.log(id_envio)
    }

    useEffect(() =>{
        carregarPerfil();
    },[]);
    function Voltar(){
        navigation.navigate('Tabs')
    }
    function MsgAviso(){
        Alert.alert(
          "Pronto",
          "Sua mensagem foi enviada com sucesso :)",
          [
            {text: "OK", onPress: () => Voltar()}
          ],
        )
      }
    async function MandarMsg(){
        try{
        const data = { id_recebe , id_envio , assunto , msg , nome , imgperfil}
        await api.post('mensagem', data)
        MsgAviso();
        } catch (err) {
          console.log(err)
        }
    
      }
    
 return (
    <ScrollView>
      <View style={glb.container}>
        
        <Header />
        
        <Text style={style.textForm}>Perfil</Text>
        <View style={style.viewPerfil}>

        <Avatar 
          containerStyle={style.avatarView}
          avatarStyle={style.iconAvatar}
          rounded icon={{ name: 'person' }}
          source={{ uri: `http://192.168.101.46:3333/fotoperfil/${perfil.imgperfil}` }}
          size="medium"
        />
          <View style={style.infoPerfil}>
              <Text style={style.textNome}>Nome: {perfil.nome}</Text>
              
          </View>
        </View>
     
        <Text style={style.textForm}>Assunto da Mensagem</Text>
        <Input
          inputStyle={{ fontFamily: 'Manrope-Light', fontSize: 16 }}
          onChangeText={(text) => setAssunto(text)}
        />
        <Text style={style.textForm}>Mensagem</Text>
        <View style={style.textareaContainer}>
          <TextArea
            containerStyle={style.viewTextarea}
            style={style.textArea}
            onChangeText={(text) => setMensagem(text)}

          />
        </View>
        <TouchableOpacity style={style.buttonEdit} onPress={() => MandarMsg()}>
        <Text style={style.textButton}>Enviar</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}