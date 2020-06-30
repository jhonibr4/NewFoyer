import React, { useState , useNavi } from 'react';
import { View, Text , TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import  Header from '../../components/Header';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import animation from '../../animation/lf30_editor_ND8utZ.json';
import api from '../../services/api';
import Icons from 'react-native-vector-icons/MaterialIcons';

//Style
import style from '../../components/styleCadastro';
import glb from '../../components/global';

export default function CadCond(){

   
    const [ exibir , setExibir ] = useState(true);
    const [ nomemora , setNome ] = useState('');
    const [ emailmora , setEmail ] = useState('');
    const [ senhamora , setSenha ] = useState('');
    const [ id_conds, setConds ] = useState('');
    const [ cpf, setCPF ] = useState();
    const [ info, setInfo ] = useState('');
    const [ blocomora, setBloco ] = useState('');
    const [ apartmora, setApart ] = useState('');
    const [ status, setStatus ] = useState()
    const navigation = useNavigation();

    function setAnimation(){
        setExibir(false)
    }
    function cadCompleto(){
        navigation.navigate('Login');
        setExibir(true)
    }

    function showAlert(){
        Alert.alert(
            "Erro",
            "Id Não foi identificado",
            [{
                text:"Ok"
            }]
        )
    }

    async function carregarConds(){
        
        try{
            const response = await api.post('conds', {id_conds});
            //Coloquei esse If aqui por conta de eu não estar conseguindo fazer com que um erro caia no Catch
            if(response.data){
                setInfo(response.data.nomecond)
            }else {
                setInfo('')
                showAlert()
            }
            
        } catch(err){
            console.log(response.data)
            
        } 
       
        
        
    }
    async function cadastrarCond(){
        const data = { nomemora, emailmora, senhamora, cpf, id_cond: id_conds , blocomora , apartmora }

        try{
        const response = await api.post('morador', data);
        setAnimation();
        console.log(response.data);
       
        } catch(err){
            console.log(err)
        }
    }
    if(exibir){
    return(
        <ScrollView>
        <View style={style.container}>
            <Header/>
            <View>
                <Text style= {style.title}>Dados Pessoais</Text>
                <Text style={style.text}>Nome</Text>
                <TextInput placeholder="Digite seu nome" style={style.input} onChangeText={(text) => setNome(text)}/>
                <Text style={style.text}>E-mail</Text>
                <TextInput keyboardType='email-address' placeholder="Digite seu e-mail" style={style.input} onChangeText={(text) => setEmail(text)}/>
                <Text style={style.text}>Senha</Text>
                <TextInput secureTextEntry={true} placeholder="Digite sua senha" style={style.input} onChangeText={(text) => setSenha(text)}/>
                <Text style={style.text}>CPF</Text>
                <TextInputMask
                placeholder="Ex:000.000.000-00"
                style={style.input}
                type={'cpf'}
                value={cpf}
                onChangeText={(cpf) => setCPF(cpf)}
                />
            <View style={style.line}>
                <View>
                <Text style={style.text}>Id do Condominio</Text>
                <TextInput
                    onChangeText={(text) => setConds(text)}
                    style={style.inputLine}
                />
                </View>
                
                <TouchableOpacity style={style.buttonSearch} onPress={() => carregarConds()}>
                    <Icons name="search" size={30} color="white"/>
                </TouchableOpacity>
            </View>
                <Text style={style.text}>Nome do Condomínio</Text>
                <Text style={style.infoCond}>{info}</Text>
            <View style={style.line}>
                <View>
                <Text style={style.text}>Bloco</Text>
                <TextInput
                    onChangeText={(text) => setBloco(text)}
                    style={style.inputLine}
                />
                </View>
                
                <View>
                <Text style={style.text}>Apartamento</Text>
                <TextInput
                    onChangeText={(text) => setApart(text)}
                    style={style.inputLine}
                />
                </View>
            </View>

                
            </View>

            
            <TouchableOpacity style={glb.button} onPress={() => cadastrarCond()}>
                <Text style={glb.textButton}>Cadastrar</Text>
            </TouchableOpacity>
           
        </View>
       </ScrollView>
    );
    } else {
        return(
            <View style={glb.buttonOk}>
            <LottieView autoSize={false} autoPlay speed={0.6} source={animation} loop={false} onAnimationFinish={() => cadCompleto()}/>
            
        </View>
        )
    }
}