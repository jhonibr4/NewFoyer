import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RadioButton from 'react-native-radio-button';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import style from './style';
import glb from '../../components/global';

export default function Options() {

    const navigation = useNavigation();
    const showAni = useRef(new Animated.Value(0)).current;
    const showAnis = useRef(new Animated.Value(0)).current;
    const buttonAni = useRef(new Animated.Value(0)).current;

    const [msg, setMsgSind] = useState("Criando a conta como síndico você terá a possibilidade de criar um ambiente que facilita todos os processos de gerenciamento do seu condominio.");
    const [msg1, setMsgCond] = useState("A conta de um condomino no foyer te oferece a possibilidade visualizar as principais informações do condominio, agendar eventos e entrar em contato com o sindico com bastate facilidade.");
    const [modal, setModal] = useState(false);
    const [cond, setCond] = useState(null);
    const [sind, setSind] = useState(null);

    function sindMsg() {
        showButton()
        setSind(true);
        setCond(false);
        sindsMsg();
        Animated.timing(showAni, {
            toValue: 1,
            useNativeDriver: true,
            duration: 600,
        }).start()
        Animated.timing(buttonAni, {
            toValue: 1,
            useNativeDriver: true,
            duration: 600,
        }).start()
        setMsgSind("Criando a conta como síndico você terá a possibilidade de criar um ambiente que facilita todos os processos de gerenciamento do seu condominio.")

    }
    function condMsg() {
        showButton();
        setSind(false);
        setCond(true);
        condsMsg();
        Animated.timing(showAni, {
            toValue: 0,
            useNativeDriver: true,
            duration: 100,
        }).start()
        setMsgCond("A conta de um condomino no foyer te oferece a possibilidade visualizar as principais informações do condominio, agendar eventos e entrar em contato com o sindico com bastate facilidade.")
    }
    function condsMsg() {

        Animated.timing(showAnis, {
            toValue: 1,
            useNativeDriver: true,
            duration: 600,
        }).start()

    }
    function sindsMsg() {
        Animated.timing(showAnis, {
            toValue: 0,
            useNativeDriver: true,
            duration: 100,
        }).start()
    }
    function showButton() {
        Animated.timing(buttonAni, {
            toValue: 1,
            useNativeDriver: true,
            duration: 600,
        }).start()
    }
    function nextPage() {
        if (sind === true) {
            navigation.navigate('Cadastro Síndico')
        } else {
            navigation.navigate('Cadastro Condomino')
        }
    }
    function navigateBack() {
        navigation.goBack();
    }
    return (
        <ScrollView>
        <View style={glb.container}>
            
            <Header />
            <Text style={style.text}>Qual tipo de conta você deseja cadastrar ?</Text>

            <View style={style.options}>
                <RadioButton
                    animation={'bounceIn'}
                    color={"#4db8fe"}
                    isSelected={sind}
                    size={12}
                    onPress={() => sindMsg()}
                />
                <Icons name="home-city" size={24} color="#999" style={{ marginLeft: 5 }} />
                <Text style={style.textRadio}>Síndico</Text>
            </View>
            <View style={style.options}>
                <RadioButton
                    animation={'bounceIn'}
                    color={"#4db8fe"}
                    size={12}
                    isSelected={cond}
                    onPress={() => condMsg()}
                />
                <User name="user" size={24} color="#999" style={{ marginLeft: 5 }} />
                <Text style={style.textRadio}>Condomino</Text>

            </View>

            <Animated.View style={{ opacity: showAni }}>
                <Text style={style.textDescription}>{msg}</Text>
            </Animated.View>
            <Animated.View style={{ opacity: showAnis }}>
                <Text style={style.textDescription}>{msg1}</Text>
            </Animated.View>
            <Animated.View style={{ opacity: buttonAni }}>
                <TouchableOpacity
                    style={glb.button}
                    onPress={() => nextPage()}
                >
                    <Text style={glb.textButton}>Próximo</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
        </ScrollView>
    )
}