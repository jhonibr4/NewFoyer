import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../../../animation/lf30_editor_ND8utZ.json';
import glb from '../../../components/global';
import style from './style';
import Envelope from 'react-native-vector-icons/FontAwesome5';
import Archives from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Octicons';
import notMessage from '../../../animation/not-message.json';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements';
import IconButton from 'react-native-vector-icons/Octicons';
import RadioButton from 'react-native-radio-button';
import api from '../../../services/api'
import { ScrollView } from 'react-native-gesture-handler';


export default function Mensagens() {
    const [count, setCount] = useState(1);
    const [msgRecebida, setMsgRecebida] = useState([]);
    const [msgEnviada, setMsgEnviada] = useState([]);
    const [enviada, setEnvio] = useState(false);
    const [recebida, setRecebe] = useState(true);
    const navigation = useNavigation();

    async function loadMsgs() {
        const id_conds = await AsyncStorage.getItem('id_cond');
        const id_mora = await AsyncStorage.getItem('id_mora');
        
        if(id_mora === null){
            var id_user = id_conds;
        } else {
            var id_user = id_mora;
        }

        const recebe = await api.get('mensagemRecebe', {
            headers: {
                authorization: id_user
            }
        })

        setMsgRecebida([...msgRecebida, ...recebe.data])
        const envio = await api.get('mensagemEnvio', {
            headers: {
                authorization: id_user
            }
        })

        setMsgEnviada([...msgEnviada, ...envio.data])


    }

    function verMsg( msg ){
        navigation.navigate('Pagina Mensagem', { msg })
    }
    function ListaMsg() {
        if (recebida === true) {
            return (
                <View style={style.viewMsg}>
                    <FlatList
                        data={msgRecebida}
                        keyExtractor={msg => String(msg.id_msg)}
                        renderItem={({ item: msg }) => (
                            <TouchableOpacity onPress={() => verMsg( msg )}>
                                <View style={style.buttonMsg}>
                                    <View style={style.infos}>
                                        <Avatar containerStyle={style.avatar}
                                            avatarStyle={style.iconAvatar}
                                            rounded icon={{ name: 'person' }}
                                            source={{ uri: `http://192.168.101.46:3333/fotoperfil/${msg.imgperfil}` }}
                                            size="large"
                                        />
                                        <View style={style.viewText}>
                                            <Text style={style.nomeMsg}>Nome: {msg.nome}</Text>
                                            <Text style={style.assuntoMsg}>Assunto: {msg.assunto}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )
        } else {
            return(
            <View style={style.viewMsg}>
                    <FlatList
                        data={msgEnviada}
                        keyExtractor={msg => String(msg.id_msg)}
                        renderItem={({ item: msg }) => (
                            <TouchableOpacity onPress={() => verMsg( msg )}>
                                <View style={style.buttonMsg}>
                                    <View style={style.infos}>
                                        <Avatar containerStyle={style.avatar}
                                            avatarStyle={style.iconAvatar}
                                            rounded icon={{ name: 'person' }}
                                            source={{ uri: `http://192.168.101.46:3333/fotoperfil/${msg.imgperfil}` }}
                                            size="large"
                                        />
                                        <View style={style.viewText}>
                                            <Text style={style.nomeMsg}>Nome: {msg.nome}</Text>
                                            <Text style={style.assuntoMsg}>Assunto: {msg.assunto}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )
        }
    }
     function carregarEnvio(){
        setEnvio(true);
        setRecebe(false);
     }
     function carregarRecebida(){
        setEnvio(false);
        setRecebe(true);
     }
    useEffect(() => {
        loadMsgs();
    }, [])

    if (count >= 1) {
        return (
            <ScrollView>
                <View style={glb.container}>
                    <View style={style.header}>
                        <View style={{ width: 50 }} />
                        <Text style={style.textHeader}>Mensagens</Text>
                        <TouchableOpacity style={style.buttonHeader} onPress={() => navigation.navigate('Nova Mensagem')}>
                            <IconButton name='plus-small' size={50} color={'#FFF'} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.lineRadio}>
                        <View style={style.options}>
                            <RadioButton
                                animation={'bounceIn'}
                                color={"#4db8fe"}
                                isSelected={recebida}
                                size={12}
                                onPress={() => carregarRecebida()}
                            />
                            <Envelope name="envelope" size={20} color="#999" style={{ marginHorizontal: 4 }} />
                            <Text style={style.textRadio}>Recebidas</Text>
                        </View>
                        <View style={style.options}>
                            <RadioButton
                                animation={'bounceIn'}
                                color={"#4db8fe"}
                                size={12}
                                isSelected={enviada}
                                onPress={() => carregarEnvio()}
                            />
                            <Envelope name="envelope-open" size={20} color="#999" style={{ marginHorizontal: 4 }} />
                            <Text style={style.textRadio}>Enviadas</Text>
                            
                        </View>
                    </View>
                    <ListaMsg/>
                </View>
            </ScrollView>
        )
    } else {
        return (
            <View style={style.container}>
                <View style={style.viewAnimation}>
                    <LottieView source={notMessage} autoPlay resizeMode='contain' style={style.animation} />
                    <Text style={style.titleError}>Erro</Text>
                    <Text style={style.textError}>Nenhuma mensagem encontrada</Text>
                </View>

                <View style={style.lineFab}>
                    <TouchableOpacity style={style.buttonFab} onPress={() => navigation.navigate('Nova Mensagem')}>
                        <Icon name='plus-small' size={50} color={'#FFF'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}





