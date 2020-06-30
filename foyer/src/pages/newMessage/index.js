import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity , Alert } from 'react-native';
import Header from '../../components/Header';
import { Card, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api'
import { FlatList , ScrollView } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';
import TextArea from 'react-native-textarea';

//Estilização
import style from './style';
import glb from '../../components/global'

export default function newMessage() {
  const [assunto , setAssunto] = useState('');
  const [msg , setMensagem] = useState('');
  const [users , setUsers] = useState([]);
  const [id_cond , setIdcond] = useState('');
  const [id_mora , setIdmora] = useState('');
  const [ id_envio , setEnvio ] = useState('');
  const [ id_recebe , setRecebe ] = useState('');
  const [nome , setNome] = useState('');
  const [imgperfil , setImgPerfil] = useState('');
  const [apart , setApart] = useState('');
  const [bloco , setBloco] = useState('');
  const [showList , setShowList] = useState(false);

  function carregarMora(user) {
    setNome(user.nomemora)
    setImgPerfil(user.imgmora)
    setApart(user.apartmora)
    setBloco(user.blocomora)
    setRecebe(user.id_mora)
    setEnvio(id_cond)
    console.log(id_envio)
    setShowList(false)
  }
  function carregarSind(user) {
    setNome(user.nomesind)
    setImgPerfil(user.imgsind)
    setApart(user.apartmsind)
    setBloco(user.blocosind)
    setRecebe(user.id_conds)
    setEnvio(id_mora)
    console.log(id_recebe)
    
    setShowList(false)
  }

  async function loadUsers() {
    const id_conds = await AsyncStorage.getItem('id_cond');
    const id_mora = await AsyncStorage.getItem('id_mora');
    setIdmora(id_mora)
    setIdcond(id_conds)
    console.log(id_mora)
    if(id_mora === null){
    const response = await api.get('morador', {
      headers: {
        authorization: id_conds
      }
    });
    setUsers([...users, ...response.data])
  } else {
    const response = await api.get('cond', {
      headers: {
        authorization: id_conds
      }
    });
    setUsers([...users, ...response.data]);
  }
  }

  function MsgAviso(){
    Alert.alert(
      "Pronto",
      "Seus dados foram alterado com sucesso, agora você será desconectado para concluir o processo.",
      [
        {text: "OK", onPress: () => Logout()}
      ],
    )
  }
  function Lista(){
    if(id_mora === null){
      return(
        <ScrollView>
        <FlatList
        data={users}
        keyExtractor={user => String(user.id_mora)}
        renderItem={({ item: user }) => (
          <View>
          <TouchableOpacity style={style.line} onPress={() => carregarMora(user)}>
            <Avatar containerStyle={style.avatar}
              avatarStyle={style.iconAvatar}
              rounded icon={{ name: 'person' }}
              source={{ uri: `http://192.168.101.46:3333/fotoperfil/${user.imgmora}` }}
              size="large"
            />

            <Text style={style.nome}>{user.nomemora}</Text>
          </TouchableOpacity>
          </View>
          
        )}
      />
      </ScrollView>
      )  
    } else{
      return(  
      
      <FlatList
        data={users}
        keyExtractor={user => String(user.id_conds)}
        renderItem={({ item: user }) => (
          <View>
          <TouchableOpacity style={style.line} onPress={() => carregarSind(user)}>
            <Avatar containerStyle={style.avatar}
              avatarStyle={style.iconAvatar}
              rounded icon={{ name: 'person' }}
              source={{ uri: `http://192.168.101.46:3333/fotoperfil/${user.imgsind}` }}
              size="large"
            />

            <Text style={style.nome}>{user.nomesind}</Text>
          </TouchableOpacity>
          </View>
        )}
      />
      )
    }
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

  function Button(){
    if(showList === false){
      return(
        <TouchableOpacity
          style={glb.button}
          onPress={() => setShowList(true)}
        >
          <Text style={glb.textButton}>Escolher Perfil</Text>
        </TouchableOpacity>
      )
    } else {
      return(
      
        <Card title="Selecione o perfil que deseja enviar a mensagem" containerStyle={{ height: 400 }}>
            <Lista />
            
        </Card>
        
      )
    }
  }

  
  useEffect(() => {
    loadUsers()
  }, [])
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
          source={{ uri: `http://192.168.101.46:3333/fotoperfil/${imgperfil}` }}
          size="medium"
        />
          <View style={style.infoPerfil}>
              <Text style={style.textNome}>Nome:{nome}</Text>
              <View style={style.lineApart}>
                <Text style={style.textApart} >Apartamento: {apart}</Text>
                <Text style={style.textApart}>Bloco: {bloco}</Text>
              </View>
          </View>
        </View>
        <Button />
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