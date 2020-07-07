import React from 'react';
import { View , Text , TouchableOpacity , ScrollView} from 'react-native';
import { Avatar } from 'react-native-elements';
import Headers from '../../components/Header';
import glb from '../../components/global';
import { useRoute } from '@react-navigation/native';
import style from './style';

    

export default function pageInfos() {
    const route = useRoute();
    const user = route.params.user

 return (
     <ScrollView>
    <View style={glb.container}>
        <Headers />
        <Text style={style.textTitlePage}>Informações do Usuário</Text>
                <Avatar 
                    containerStyle={style.avatar}
                    avatarStyle={style.iconAvatar} 
                    rounded icon={{ name: 'person' }}
                    source={{uri: `http://192.168.101.46:3333/fotoperfil/${user.imgmora}`}}
                    size="xlarge"
                />
            <View style={style.viewInfo}>       
            <Text style={style.textTitleInfos}>Nome</Text>
            <Text style={style.Infos}>{user.nomemora}</Text> 
            </View>   
            <View style={style.viewInfo}>       
            <Text style={style.textTitleInfos}>E-mail</Text>
            <Text style={style.Infos}>{user.emailmora}</Text> 
            </View>  
            <View style={style.viewInfo}>       
            <Text style={style.textTitleInfos}>CPF</Text>
            <Text style={style.Infos}>{user.cpf}</Text> 
            </View> 
            <View style={style.viewInfo}>       
            <Text style={style.textTitleInfos}>Bloco</Text>
            <Text style={style.Infos}>{user.blocomora}</Text> 
            </View>    
            <View style={style.viewInfo}>       
            <Text style={style.textTitleInfos}>Apartamento</Text>
            <Text style={style.Infos}>{user.apartmora}</Text> 
            </View>
            <View style={style.lineButtons}>  
            <TouchableOpacity style={style.buttonAccept} onPress={() => Confirmar(user)}>
                <Text style={style.textButton}>Aceitar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonReject}>
                <Text style={style.textButton}>Rejeitar</Text>
            </TouchableOpacity>
            </View> 
        </View>
        </ScrollView>
  );
}