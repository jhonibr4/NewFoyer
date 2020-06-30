import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header';
import LottieView from 'lottie-react-native';
import edit from '../../animation/info.json';
import { Input } from 'react-native-elements';
import TextArea from 'react-native-textarea';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import animationImage from '../../animation/image.json';
import uploadFile from '../../../api/UploadImgNoticia';
import pick from '../../../api/picker';
import AsyncStorage from '@react-native-community/async-storage'


import style from './style';
import glb from '../../components/global';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function editCond() {

  const [ imagem , setImagem ] = useState(null);
  const [ filename , setFilename ] = useState(null);
  const [ data , setData ] = useState(null);
 
  const [ titulo , setTitulo ] = useState('');
  const [ desc , setDescricao ] = useState('');
  const [ id_cond , setIdcond ] = useState('');

  async function loadInfos(){
    const id_cond = await AsyncStorage.getItem('id_cond')
    setIdcond(id_cond)
  }
  
  useEffect(() => {
    loadInfos();
  },[])
  
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
      { name : 'info', data : id_cond},
      { name : 'titulo', data : titulo},
      { name : 'desc', data : desc},
      { name: 'avatar', filename: filename, data:data }
    ])
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
    
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
        <View>
          
        <Image style={style.imgView} source={imagem}/> 
        </View>
      )
    }
  }
  return (
    <ScrollView>
    <View style={glb.container}>
      <Header />
      <View style={style.viewDescription}>
        <View style={style.viewText}>
          <Text style={style.textDescription}>Aqui é onde você poderá postar notícias para os moradores e ficarem informados sobre tudo que acontece em seu condomínio.</Text>
        </View>
        <View style={style.viewAnimation}>
          <LottieView autoSize={false} speed={0.6} source={edit} autoPlay={true} loop />
        </View>
      </View>
      <TouchableOpacity style={style.button} onPress={() => show()}>
        <Icon name="camera" size={14} color="#FFF" style={{ marginRight: 5 }} />
        <Text style={style.textButton}>Alterar Foto</Text>
      </TouchableOpacity>
      <View style={style.viewForm}>
      <Text style={style.textForm}>Imagem da Notícia</Text>
      <ViewImg/>
      

        <Text style={style.textForm}>Titulo da Notícia</Text>
          <Input
            inputStyle={{ fontFamily: 'Manrope-Light', fontSize: 16 }}
            onChangeText={(text) => setTitulo(text)}
          />
        <Text style={style.textForm}>Descrição da Notícia</Text>
        <View style={style.textareaContainer}>
          <TextArea
            containerStyle={style.viewTextarea}
            style={style.textArea}
            onChangeText={(text) => setDescricao(text)}
            
          />
        </View>
        
      </View>
      <TouchableOpacity style={style.button} onPress={() => upload()}>
        <Text style={style.textButton}>Salvar</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}