import React , { useState , useEffect , Component } from 'react';
import { View , Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Avatar , Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import glb from '../../../components/global';
import style from './style';
import img from '../../../assets/not-found.png';
import { useNavigation } from '@react-navigation/native';





export default function Perfil(){
     
     const [ id_cond , setIdcond ] = useState('');
     const [ nomecond , setNomecond ] = useState('');
     const [ nome , setNome ] = useState('');
     const [ bloco , setBloco ] = useState('');
     const [ apart , setApart ] = useState('');
     const [ imagem , setImagem ] = useState('');
     const [ img , setImg ] = useState(true);
     const [ imgsind , setImgsind ]= useState('');
     const  navigation = useNavigation();
   
     async function carregarInfos(){
       
      const id_cond = await AsyncStorage.getItem('id_cond')
      const nomecondasync = await AsyncStorage.getItem('nomecond')
      const nomeasync = await AsyncStorage.getItem('nome')
      const blocoasync = await AsyncStorage.getItem('bloco')
      const apartasync = await AsyncStorage.getItem('apart')
      const imagemSind = await AsyncStorage.getItem('imgsind')
      const imagemMora = await AsyncStorage.getItem('imgmora')
      setIdcond(id_cond)
      setNomecond(nomecondasync)
      setNome(nomeasync)
      setBloco(blocoasync)
      setApart(apartasync)
      if(imagemMora === null){
        setImagem(`http://192.168.101.46:3333/fotoperfil/${imagemSind}`)
      } else {
        setImagem(`http://192.168.101.46:3333/fotoperfil/${imagemMora}`)
      }
      
    } 

 useEffect(() => {
  carregarInfos();
 }, []);
   
  
  

  function Sair(){
    AsyncStorage.clear();
    navigation.navigate('Login')
  }
  


 return (
  
   <ScrollView>
   <View style={glb.container}>
     
        
     <View style={style.boxInfos}>
        <Avatar containerStyle={style.avatar}
        avatarStyle={style.iconAvatar} 
        rounded icon={{ name: 'person' }}
        source={{uri: imagem}}
        size="large"
      />
        <Text style={style.title}>Nome</Text>
        <Text style={style.infos}>{nome}</Text>
        <Text style={style.title}>Condominio</Text>
        <Text style={style.infos}>{nomecond}</Text>
        <View style={style.line}>
          <View style={style.infoLine}>
            <Text style={style.title}>Apartamento</Text>
            <Text style={style.infos}>{bloco}</Text>
          </View>  
          <View style={style.infoLine}>
            <Text style={style.title}>Bloco</Text>
            <Text style={style.infos}>{apart}</Text>
          </View>
        </View> 
      </View>
      <Button title="Editar Informações Pessoais" type='outline' buttonStyle={style.buttons} titleStyle={style.textButtons} onPress={() => navigation.navigate('Editar Perfil')}/>
      <Button title="Usuários Pendentes" type='outline' buttonStyle={style.buttons} titleStyle={style.textButtons}/>
      <Button title="Meus Eventos" type='outline' buttonStyle={style.buttons} titleStyle={style.textButtons}/>
      <Button title="Sobre nós" type='outline' buttonStyle={style.buttons} titleStyle={style.textButtons} onPress={() => navigation.navigate('Sobre')}/>
      <TouchableOpacity style={glb.button} onPress={() => Sair()}>
        <Text style={glb.textButton}>Sair</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
 }

 
