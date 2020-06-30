import React from 'react';
import { View , Text , ScrollView , Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header';
import style from './style';
import glb from '../../components/global';

export default function pageNoticia() {

    const route = useRoute();
    const noticia = route.params.noticia

 return (
    <ScrollView>
    <View style={glb.container}>
      
        <Header />
        <Text style={style.titulo}>{noticia.titulo}</Text>
        <View style={style.box}>
        <Image source={{uri:`http://192.168.101.46:3333/fotonoticia/${noticia.imgnoticia}`}} style={style.imgSobre}/>
        <Text style={style.text}>{noticia.desc}</Text>
        </View>
        
     </View>
 </ScrollView>
  );
}