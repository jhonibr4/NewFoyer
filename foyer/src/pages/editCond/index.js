import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header';
import LottieView from 'lottie-react-native';
import edit from '../../animation/edit.json';
import { Input } from 'react-native-elements';
import TextArea from 'react-native-textarea';
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'
import animationImage from '../../animation/image.json'
import uploadFile from '../../../api/UploadImgCond'
import pick from '../../../api/picker'


import style from './style';
import glb from '../../components/global';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function editCond() {

  const [ imagem , setImagem ] = useState(null);
  const [ filename , setFilename ] = useState(null);
  const [ data , setData ] = useState(null);
 
  const [ nomecond , setNomecond ] = useState('');
  const [ descricao , setDescricao ] = useState('');
  const [ id_conds , setIdcond ] = useState('');
  async function loadInfos(){
    var nomecond = await AsyncStorage.getItem('nomecond');
    var descricao = await AsyncStorage.getItem('descricao');
    var id_cond = await AsyncStorage.getItem('id_cond');
    setNomecond(nomecond);
    setDescricao(descricao);
    setIdcond(id_cond);
  }
  useEffect(() => {
    loadInfos();
  } , [])
  function show(){
    pick((source, data, filename) => {
    setImagem(source),
    setData(data), 
    setFilename(filename)

    }
    )
  }

  function upload(){
    uploadFile([
      { name : 'info', data : id_conds},
      { name: 'avatar', filename: filename, data:data }
    ])
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
    
  }
  async function editCond(){
    const data = { nomecond , descricao };
    const response = await api.put('cond', data,{
      headers:{
        authorization:id_conds
      }
    })
    upload()
    console.log(response.data)
  }
  function ViewImg(){
    if(imagem === null){
      return(
      <View style={style.imgView}>
        <LottieView source={animationImage} loop autoPlay={true}/>
      </View>
      )
    }
    else{
      return(
        <Image style={style.imgView} source={imagem}/> 
      )
    }
  }
  return (
    <ScrollView>
    <View style={glb.container}>
      <Header />
      <View style={style.viewDescription}>
        <View style={style.viewText}>
          <Text style={style.textDescription}>Aqui é onde você poderá editar as informações principais de seu condomínio</Text>
        </View>
        <View style={style.viewAnimation}>
          <LottieView autoSize={false} speed={0.6} source={edit} autoPlay={true} loop />
        </View>
      </View>
      <TouchableOpacity style={style.button} onPress={() => show()}>
        <Icon name="camera" size={14} color="#FFF" style={{ marginRight: 5 }} />
        <Text style={style.textButton}>Editar Foto</Text>
      </TouchableOpacity>
      <ViewImg/>
      <View style={style.viewForm}>

        <Text style={style.textForm}>Nome do condomínio</Text>
          <Input
            inputStyle={{ fontFamily: 'Manrope-Light', fontSize: 16 }}
            value={nomecond}
            onChangeText={(text) => setNomecond(text)}
          />
        <Text style={style.textForm}>Descrição do condomínio</Text>
        <View style={style.textareaContainer}>
          <TextArea
            containerStyle={style.viewTextarea}
            style={style.textArea}
            onChangeText={(text) => setDescricao(text)}
            value={descricao}
          />
        </View>
        
      </View>
      <TouchableOpacity style={style.button} onPress={() => editCond()}>
        <Text style={style.textButton}>Alterar</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}