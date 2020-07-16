import React, { useEffect , useState } from 'react';
import { View  , Text, TouchableOpacity} from 'react-native';
import { Avatar , Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api'

import Headers from '../../components/Header';
import style from './style'
import glb from '../../components/global';
import { useNavigation } from '@react-navigation/native';




export default function analisarEventos() {

  const navigation = useNavigation();
  const [ eventos , setEventos ] = useState([]);

async function loadEventos(){
  const id_cond = await AsyncStorage.getItem('id_cond');

  const infoEventos = await api.get('eventoSind', {
    headers:{
      authorization:id_cond
    }
  })
  setEventos(infoEventos.data)
}

function verEvento(evento){
  navigation.navigate('Analise Evento')
}

useEffect(() =>{
  loadEventos()
},[])

 return (
    <View style={glb.container}>
        <Headers/>
        <Text style={style.textTitle}>Solicitações de Eventos</Text>
        <FlatList
          data={eventos}
          keyExtractor={evento => String(evento.id_evento)}
          renderItem={({item : evento}) => (
          <View style={style.viewEvento}>
          <Text style={style.textEvento}>Titulo do Evento</Text>
          <Text style={style.titleEvento}>{evento.tituloEvento}</Text>
          <Text style={style.textEvento}>Data do Evento: {evento.data}</Text>
        
          <View style={style.viewdescricao}>
          <Text style={style.textDescricao} numberOfLines={4}>{evento.descricao}</Text>
          </View>
          <TouchableOpacity style={style.buttonView} onPress={() => verEvento(evento)}>
            <Text style={style.textButtonView}>Veja mais </Text>
            <Icon name='chevron-right'  size={16} color={"#a5a8a8"} />
          </TouchableOpacity>
        </View>
          )}
        />
        
    </View>
  );
}