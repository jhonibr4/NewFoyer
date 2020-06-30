import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Arrow from 'react-native-vector-icons/FontAwesome5';
import Logo from '../assets/logo.png'
import style from './global'
import { useNavigation } from '@react-navigation/native';


    

export default function Header(){

    const navigation = useNavigation();
    
    function navigateBack(){
        navigation.goBack();
    }
    return(
    <View style={style.header}>
        <TouchableOpacity style={style.buttonBack} onPress={ () => navigateBack()}>
            <Arrow name="angle-left" size={35} color="#FFF"/>
        </TouchableOpacity>
        <Image source={Logo} style={style.img}/>
    </View>
    )
}