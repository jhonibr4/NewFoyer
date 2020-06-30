import React , { useState , useEffect } from 'react';
import { View , Text , Image, ScrollView, TouchableOpacity} from 'react-native';
import glb from '../../../components/global';
import notFound from '../../../assets/not-found.png';
import style from './style'
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default  function Inicio(){
   
    
    const navigation = useNavigation();
    const [ id_mora  , setIdmora] = useState("")
    const [ nomecond  , setnomeCond] = useState("")
    const [ msgNull , setMsgNull ] = useState('No momento seu condomínio não tem nenhuma descrição, entre na opção "Alterar Informações" e você irá conseguir modificar todas informações sobre seu condomínio como foto, descrição e até mesmo o nome de seu condomínio.')
    const [ descricao , setDescricao ] = useState('')
    const [ imagem , setImagem ] = useState()
    
    async function loadInfos(){
        const id_mora = await AsyncStorage.getItem('id_mora')
        const imgcond = await AsyncStorage.getItem('imgcond')
        const nomecond = await AsyncStorage.getItem('nomecond')
        const  descricao = await AsyncStorage.getItem('descricao')
        setImagem(imgcond);
        setnomeCond(nomecond);
        setDescricao(descricao);
        setIdmora(id_mora)
    }
    useEffect(() => {
        loadInfos();
    });

    function Button(){
        if(id_mora){
            return <View/>
        } else {
            return(
                <TouchableOpacity style={glb.button} onPress={() => navigation.navigate('Editar Condominio')}>
                    <Text style={glb.textButton} >Alterar Informações</Text>
                </TouchableOpacity>
                )
        }
    }
    function Descricao(){
        if(descricao === ""){
        return(
       <Text style={style.description}>No momento seu condomínio não tem nenhuma descrição, entre na opção "Alterar Informações" e você irá conseguir modificar todas informações sobre seu condomínio como foto, descrição e até mesmo o nome de seu condomínio.</Text>
        )
        }
        else{
        return(
        <Text style={style.description}>{descricao}</Text>
        )
        }
    }
   
    
    return(
        <ScrollView>
        <View style={glb.container}>
            <View>
                <Image style={style.image} source={{uri:`http://192.168.101.46:3333/fotocond/${imagem}`}}/>
            </View>
                <Text style={style.title}>{nomecond}</Text>
                <Descricao/>
                <Button/>
            </View>
        </ScrollView>
    )
}