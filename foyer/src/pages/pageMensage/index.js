import React  from 'react';
import { View , Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'
import glb from '../../components/global'
import { Avatar } from 'react-native-elements';
import style from './style';
import { TouchableOpacity } from 'react-native';
                                        

export default function pageMensage() {

    const route = useRoute();
    const navigation = useNavigation();
    const mensagem = route.params.msg;

    function Responder( mensagem ){
        navigation.navigate('Responder Mensagem' , { mensagem })
    }

 return (
   <View style={glb.container}>
       <Header/>
            <Text style={style.nome}>{mensagem.nome}</Text>
            <Avatar 
            containerStyle={style.avatar}
            avatarStyle={style.iconAvatar}
            rounded icon={{ name: 'person' }}
            source={{ uri: `http://192.168.101.46:3333/fotoperfil/${mensagem.imgperfil}` }}
            size="xlarge"
            />
            
        <View style={style.viewMsg}>
        <Text style={style.assunto}>Assunto: {mensagem.assunto}</Text>
        <Text style={style.msg}>{mensagem.msg}</Text>
        </View>
        <TouchableOpacity style={glb.button}  onPress={() => Responder( mensagem )}>
            <Text style={glb.textButton}>Responder Mensagem</Text>
        </TouchableOpacity>
   </View>
  );
}