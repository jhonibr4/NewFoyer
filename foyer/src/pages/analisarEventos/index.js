import React from 'react';
import { View  , Text, TouchableOpacity} from 'react-native';
import { Avatar , Icon } from 'react-native-elements';

import Headers from '../../components/Header';

import style from './style'
import glb from '../../components/global';

export default function analisarEventos() {
 return (
    <View style={glb.container}>
        <Headers/>
        <Text style={style.textTitle}>Solicitações de Eventos</Text>
        
        <View style={style.viewEvento}>
        <Text style={style.nomeUser}>Jhonathan Felix Braz</Text>
          <Avatar 
            containerStyle={style.avatar}
            avatarStyle={style.iconAvatar} 
            rounded icon={{ name: 'person' }}
            size="large"
          />
          <Text style={style.textEvento}>Titulo do Evento</Text>
          <Text style={style.titleEvento}>Aniversário</Text>
          <View style={style.viewdescricao}>
            <Text style={style.textDescricao} numberOfLines={5}>Teste Teste Teste Teste Teste Teste Teste Teste 
            Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste 
            Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste
            Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste </Text>
          </View>
          <TouchableOpacity style={style.buttonView}>
            <Text style={style.textButtonView}>Veja mais </Text>
            <Icon name='chevron-right'  size={16} color={"#a5a8a8"} />
          </TouchableOpacity>
        </View>
    </View>
  );
}