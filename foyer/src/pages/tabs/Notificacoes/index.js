import React, { useEffect , useState } from 'react';
import { View , Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import glb from '../../../components/global';
import style from './style';
import { Divider } from 'react-native-elements';
import IconButton from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage'

export default function Notificacoes() {
  const navigation = useNavigation()
  const [ noticias , setNoticias ] = useState([])
  
  
  async function loadNoticias(){
    const id_conds = await AsyncStorage.getItem('id_cond');
    const response = await api.get('noticia', {
      headers:{
        authorization:id_conds
      }
    });

    setNoticias([...noticias, ...response.data])
  }
 
    
  
  useEffect(() => {
  loadNoticias()
  }, [])

  function pageNoticia( noticia ){
    navigation.navigate('Pagina Noticia' ,{ noticia })
  }
 return (
   
 
   <View style={glb.container}>
   
     <View style={style.header}>   
        <View style={{width:50}}/>
        <Text style={style.textHeader}>Mural</Text>
        
        <TouchableOpacity style={style.buttonHeader} onPress={() => navigation.navigate('Adicionar Noticia')}>
        <IconButton name='plus-small' size={50} color={'#FFF'} />
        </TouchableOpacity>
       
      </View>

      <FlatList
       data={noticias}
       keyExtractor={noticia => String(noticia.id_noticia)}
       renderItem={({item: noticia}) => (
      <Card
        title={noticia.titulo}
        image={{uri:`http://192.168.101.46:3333/fotonoticia/${noticia.imgnoticia}`}} 
        containerStyle={style.card} 

      >
        <Text style={style.textDescription} numberOfLines={2}>{noticia.desc}</Text>
        <TouchableOpacity onPress={() => pageNoticia(noticia)}>
          <View style={style.buttonView}>
            <Text style={style.textButtonView}>Veja mais </Text>
            <Icon name='chevron-right'  size={16} color={"#a5a8a8"} />
          </View>
        </TouchableOpacity>
      </Card>
       )}
      />
      
     
    
    </View>
    
  );
}