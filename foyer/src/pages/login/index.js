import React, { useState } from 'react';
import { View, Text, Image, TextInput,ImageBackground,TouchableOpacity, ScrollView , Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import RadioButton from 'react-native-radio-button';
import style from './style';
import Logo from '../../assets/logo.png';
import Fundo from '../../assets/fundo.jpg';
import glb from '../../components/global';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/Feather';
import api from '../../services/api';

export default function Login(){
    const [cond, setCond] = useState(false);
    const [sind, setSind] = useState(true);
    var [emailsind, setEmailSind] = useState('');
    var [senhasind, setSenhaSind] = useState('');
    var [emailmora, setEmailMora] = useState('');
    var [senhamora, setSenhaMora] = useState('');
    const navigation = useNavigation();

    async function loginMora(){
        const dataMora = { emailmora , senhamora };
        try{
            const response =  await api.post('sessionmora', dataMora);
            console.log(response.data.status)
            await AsyncStorage.setItem('nomecond' , response.data.nomecond)
            await AsyncStorage.setItem('nome' , response.data.nomemora)
            await AsyncStorage.setItem('bloco' , response.data.blocomora)
            await AsyncStorage.setItem('apart' , response.data.apartmora)
            await AsyncStorage.setItem('id_cond' , response.data.id_cond)
            await AsyncStorage.setItem('id_mora' , response.data.id_mora)
            await AsyncStorage.setItem('email' , response.data.emailmora)
            await AsyncStorage.setItem('imgcond' , response.data.imgcond)
            await AsyncStorage.setItem('imgmora' , response.data.imgmora)
            await AsyncStorage.setItem('descricao' , response.data.descricao)
            navigation.navigate('Tabs')
            
        } catch(err){
                MsgAviso();  
        }
    }
    async function loginSind(){
        const dataSind = { emailsind , senhasind };
        try{
            const response =  await api.post('sessioncond', dataSind);
            console.log(response.data)
            await AsyncStorage.setItem('nomecond' , response.data.nomecond)
            await AsyncStorage.setItem('nome' , response.data.nomesind)
            await AsyncStorage.setItem('bloco' , response.data.blocosind)
            await AsyncStorage.setItem('apart' , response.data.apartsind)
            await AsyncStorage.setItem('id_cond' , response.data.id_conds)            
            await AsyncStorage.setItem('email' , response.data.emailsind)
            await AsyncStorage.setItem('imgsind' , response.data.imgsind)
            await AsyncStorage.setItem('imgcond' , response.data.imgcond)
            await AsyncStorage.setItem('descricao' , response.data.descricao)
            
            
            navigation.navigate('Tabs')
            
        } catch(err){
            MsgAviso()
        }
        
    }
    function MsgAviso(){
        Alert.alert(
          "Erro",
          "Seu e-mail ou senha está incorreta, tente novamente."
        )
      }
    function logar(){
        if(sind === true){
            loginSind();
        }
        else{
            loginMora();
        }
    }        


    function TipoLogin(){
        [emailsind, setEmailSind] = useState('');
        [senhasind, setSenhaSind] = useState('');
        [emailmora, setEmailMora] = useState('');
        [senhamora, setSenhaMora] = useState('');
        if(sind === true){
            return(
                <View>
                    <View style={style.lineInput}>
                    <Icon
                        style={{marginLeft:10}}
                        name='envelope'
                        size={18}
                        color='black'
                    />
                    <TextInput style={style.input}
                        placeholder="E-mail"
                        onChangeText={(text) => setEmailSind(text)}
                        autoCapitalize='none'
                    />
                    </View>
                       
                    <View style={style.lineInput}>
                    <Icon
                        style={{marginLeft:10}}
                        name='lock'
                        size={24}
                        color='black'
                    />
                    <TextInput
                        style={style.input}
                        placeholder="Senha"
                        onChangeText={(text) => setSenhaSind(text)}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                    </View>
                </View>
            )
        } else{
            return(
                <View>
                <View style={style.lineInput}>
                <Icon
                    style={{marginLeft:10}}
                    name='envelope'
                    size={18}
                    color='black'
                />
                <TextInput style={style.input}
                placeholder="E-mail"
                onChangeText={(text) => setEmailMora(text)}
                autoCapitalize='none'
                />
                </View>
                   
                <View style={style.lineInput}>
                <Icon
                    style={{marginLeft:10}}
                    name='lock'
                    size={24}
                    color='black'
                />
                <TextInput
                    style={style.input}
                    placeholder="Senha"
                    onChangeText={(text) => setSenhaMora(text)}
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
                
                </View>
            </View>
            )
        }
    }
    function pageCadastro(){
        navigation.navigate('Cadastro')
    }
    function selectCond(){
        setCond(true)
        setSind(false)
    }
    function selectSind(){
        setCond(false)
        setSind(true)
    }
    
    
    
        return(
            
            <ScrollView>
            <View style={glb.container}>
                <ImageBackground source={Fundo} style={style.imgback}>
                    <Image source={Logo} style={style.logo}/>
                    <Text style={style.textType}>Escolha o tipo de login</Text>
            <View style={style.lineRadio}>
            <View style={style.options}>
                <RadioButton
                    animation={'bounceIn'}
                    innerColor='#FFF'
                    outerColor='#FFF'
                    isSelected={sind}
                    size={12}
                    onPress={() => selectSind()}
                />
                <Icons name="home-city" size={24} color="#FFF" style={{ marginLeft: 5 }} />
                <Text style={style.textRadio}>Síndico</Text>
            </View>
            <View style={style.options}>
                <RadioButton
                    animation={'bounceIn'}
                    innerColor='#FFF'
                    outerColor='#FFF'
                    size={12}
                    isSelected={cond}
                    onPress={() => selectCond()}
                />
                <User name="user" size={24} color="#FFF" style={{ marginLeft: 5 }} />
                <Text style={style.textRadio}>Condomino</Text>
                </View>
            </View>
                    <TipoLogin/>
                    <View>
                    <TouchableOpacity style={style.buttonForget}>
                        <Text style={style.textForget}>Esqueceu sua senha ?</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={style.button} onPress={() => logar()}>
                        <Text style={style.textButton}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}
                    onPress={() => pageCadastro()}
                    >
                        <Text style={style.textButton}>Cadastar-se</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
            </ScrollView>
     )
   
}