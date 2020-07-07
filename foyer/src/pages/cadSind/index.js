import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import Header  from '../../components/Header';
import glb from '../../components/global';
import style from '../../components/styleCadastro';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker';
import LottieView from 'lottie-react-native';
import api from '../../services/api';
import axios from 'axios';
import animation from '../../animation/lf30_editor_ND8utZ.json';


export default function CadSind(){


    const [ exibir, setExibir ] = useState(true);
    const [ nomesind, setNomeSind ] = useState('');
    const [ emailsind, setEmail ] = useState('');
    const [ senhasind, setSenha ] = useState('');
    const [ nomecond, setNcond ] = useState('');
    const [ cnpj, setCNPJ ] = useState('');
    const [ cep, setCEP ] = useState('');
    const [ num, setNum ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ UF, setUF ] = useState('');
    const [ blocosind, setBloco ] = useState('');
    const [ apartsind, setApart ] = useState('');
    const navigation = useNavigation();

    function setAnimation(){
        setExibir(false)
    }
    function buttonOK(){
        navigation.navigate('Login');
        setExibir(true)
    }
    async function buscarCEP(){
        try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        console.log(response.data)
        setCidade(response.data.localidade)
        setUF(response.data.uf)
        
        }
        catch(err){
            console.log(err);
            return
        }
    }
    async function cadastrarCond(){
    const data = { nomesind , UF, emailsind, senhasind, nomecond, cnpj, cep, num, cidade , blocosind , apartsind };
    const response = await api.post('cond', data);
    setAnimation();
    console.log(response);

  
    }
    
    if(exibir){
    return(
        <ScrollView>
        <View style={glb.container}>
            <Header/>
            <View>
            <Text style= {style.title}>Dados Residênciais</Text>
            <Text style={style.text}>Nome do Sindíco</Text>
            <TextInput style={style.input} onChangeText={(text) => setNomeSind(text)}/>
            <Text style={style.text}>E-mail</Text>
            <TextInput keyboardType='email-address' style={style.input} onChangeText={(text) => setEmail(text)}/>
            <Text style={style.text}>Senha</Text>
            <TextInput secureTextEntry={true} style={style.input} onChangeText={(text) => setSenha(text)}/>
            <Text style={style.text}>Nome do Condomínio</Text>
            <TextInput style={style.input} onChangeText={(text) => setNcond(text)}/>
            <Text style={style.text}>CNPJ</Text>
            <TextInputMask
            placeholder="Ex:000.000.000-00"
            style={style.input}
            type={'cnpj'}
            value={cnpj}
            onChangeText={(cnpj) => setCNPJ(cnpj)}
            />
            <View style={style.line}>
                <View>
                    <Text style={style.text}>CEP</Text>
                    <TextInput keyboardType='number-pad' placeholder="Ex:00000-000" style={style.inputLine} onBlur={() => buscarCEP()} onChangeText={(text)=> setCEP(text)}/>
                </View>
                
                <View>
                    <Text style={style.text}>Nº</Text>
                    <TextInput keyboardType='decimal-pad' style={style.inputLine} onChangeText={(text)=> setNum(text)}/>
                </View>
            </View>
            <View style={style.line}>
                <View>
                    <Text style={style.text}>Cidade</Text>
                <TextInput style={style.inputLine} onChangeText={(text) => setCidade(text)} value={cidade}/>
                </View>
                <View style={style.selectLine}>
                    <Text style={style.text}>UF</Text>
                    <Picker
                        style={style.widthSelect}
                        selectedValue={UF}
                        onValueChange={(itemValue, itemIndex) => setUF( itemValue )}
                    >
                      
                        <Picker.Item label="AC" value="AC" />
                        <Picker.Item label="AL" value="AL" />
                        <Picker.Item label="AM" value="AM" />
                        <Picker.Item label="AP" value="AP" />
                        <Picker.Item label="CE" value="CE" />
                        <Picker.Item label="DF" value="DF" />
                        <Picker.Item label="ES" value="ES" />
                        <Picker.Item label="GO" value="GO" />
                        <Picker.Item label="MA" value="MA" />
                        <Picker.Item label="MG" value="MG" />
                        <Picker.Item label="MS" value="MS" />
                        <Picker.Item label="MT" value="MT" />
                        <Picker.Item label="PA" value="PA" />
                        <Picker.Item label="PB" value="PB" />
                        <Picker.Item label="PE" value="PE" />
                        <Picker.Item label="PI" value="PI" />
                        <Picker.Item label="PR" value="PR" />
                        <Picker.Item label="RJ" value="RJ" />
                        <Picker.Item label="RN" value="RN" />
                        <Picker.Item label="RO" value="RO" />
                        <Picker.Item label="RR" value="RR" />
                        <Picker.Item label="RS" value="RS" />
                        <Picker.Item label="SC" value="SC" />
                        <Picker.Item label="SE" value="SE" />
                        <Picker.Item label="SP" value="SP" />
                        <Picker.Item label="TO" value="TO" />
                        
                    </Picker>
                </View>
            </View>
            <View style={style.line}>
                <View>
                <Text style={style.text}>Bloco</Text>
                <TextInput
                    placeholder={"Opcional"}
                    onChangeText={(text) => setBloco(text)}
                    style={style.inputLine}
                />
                </View>
                
                <View>
                <Text style={style.text}>Apartamento</Text>
                <TextInput
                placeholder={"Opcional"}
                    onChangeText={(text) => setApart(text)}
                    style={style.inputLine}
                />
                </View>
            </View>
            
            <TouchableOpacity style={glb.button} onPress={() => cadastrarCond()}>
                <Text style={glb.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            
            </View>
        </View>
        </ScrollView>
    );
    } else {
        return(
            <View style={glb.buttonOk}>
                
                
                <LottieView autoSize={false} speed={0.6} source={animation} autoPlay={true} loop/>
                <TouchableOpacity style={glb.button} onPress={() => buttonOK()}>
                    <Text style={glb.textButton}>OK</Text>
                </TouchableOpacity>
            </View>
       
        
        )
    }
}