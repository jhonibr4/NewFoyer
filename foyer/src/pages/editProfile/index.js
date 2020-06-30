import React , { useEffect , useState } from 'react';
import { View  , Text , ScrollView, Alert} from 'react-native';
import { Input , Avatar} from 'react-native-elements';
import glb from '../../components/global';
import Header from '../../components/Header';
import style from './style';
import LottieView from 'lottie-react-native';
import edit from '../../animation/edit.json';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native';
import pick from '../../../api/picker.js';
import uploadSind from '../../../api/UploadImgSind.js';
import uploadMora from '../../../api/uploadImgMora.js';



export default function editInfo() {
  const navigation = useNavigation();
  const [ avatar , setAvatar] = useState(null);
  const [ data , setData ] = useState(null);
  const [ filename , setFilename ] = useState(null);
  const [ id_conds  , setIdcond] = useState('');
  const [ id_mora  , setIdmora] = useState('');
  const [ nome , setnome ] = useState('');
  const [ bloco , setBloco ] = useState('');
  const [ senha , setSenha ] = useState('');
  const [ apart , setApart ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ imgsind , setImgsind ] = useState('');
  const [ imgmora , setImgmora ] = useState('');
  const [ img , setImg ] = useState(true);
  async function loadInfos(){
    var id_conds = await AsyncStorage.getItem('id_cond');
    var id_mora = await AsyncStorage.getItem('id_mora');
    var nome = await AsyncStorage.getItem('nome');
    var bloco = await AsyncStorage.getItem('bloco');
    var apart = await AsyncStorage.getItem('apart');
    var email = await AsyncStorage.getItem('email');
    var imgsind = await AsyncStorage.getItem('imgsind');
    var imgmora = await AsyncStorage.getItem('imgmora');
    setIdcond(id_conds);
    setIdmora(id_mora);
    setnome(nome);
    setBloco(bloco);
    setApart(apart);
    setEmail(email);
    setImgsind(imgsind);
    setImgmora(imgmora);
    
  };
 
  useEffect(() => {
    loadInfos();
  } , []);
  function Logout(){
    AsyncStorage.clear();
    navigation.navigate('Login');
  }
  function show(){
    pick((source, data, filename) => {
    setAvatar(source),
    setData(data), 
    setFilename(filename),
    setImg(false)
    
    }
    )
  }

  function uploadS(){
    uploadSind([
      { name : 'info', data : id_conds},
      { name: 'avatar', filename: filename, data:data }
    ])
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setImg(true)
    console.log('sind')
    
  }
  function uploadM(){
    uploadMora([
      { name : 'info', data : id_mora},
      { name: 'avatar', filename: filename, data:data }
    ])
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setImg(true)
    console.log(id_mora)

    
  }
  function upload(){
    if(id_mora === null){
      uploadS();
    } else {
      uploadM();
    }
  }

  function MsgAviso(){
    Alert.alert(
      "Pronto",
      "Seus dados foram alterado com sucesso, agora você será desconectado para concluir o processo.",
      [
        {text: "OK", onPress: () => Logout()}
      ],
    )
  }
  function Img(){
    if(imgsind === null && img === true){
      return(
      <Avatar
      avatarStyle={style.iconAvatar} 
      rounded icon={{ name: 'person' }}
      source={{uri:`http://192.168.101.46:3333/fotoperfil/${imgmora}`}}
      size="xlarge"
      showEditButton
      onEditPress={() => show()} 
      />
      )
    }
    else if(img === false && imgsind === null){
      return(
        <Avatar
        avatarStyle={style.iconAvatar} 
        rounded icon={{ name: 'home' }}
        source={avatar}
        size="xlarge"
        showEditButton
        onEditPress={() => show()} 
        />
        )
    }
    else if(imgmora === null && img === false){
      return(
        <Avatar
        avatarStyle={style.iconAvatar} 
        rounded icon={{ name: 'person' }}
        source={avatar}
        size="xlarge"
        showEditButton
        onEditPress={() => show()} 
        />
        )
    }
    else{
      return(
        <Avatar
        avatarStyle={style.iconAvatar} 
        rounded icon={{ name: 'person' }}
        source={{uri:`http://192.168.101.46:3333/fotoperfil/${imgsind}`}}
        size="xlarge"
        showEditButton
        onEditPress={() => show()} 
        />
        )
    }
  }
  async function teste(){
    
    if(id_mora === null){
    const datacond = { nomesind: nome , emailsind: email , senhasind: senha , blocosind: bloco , apartsind: apart };
    const response = await api.put('cond' , datacond, {
      headers:{
        authorization:id_conds
      }
    });
    MsgAviso();
    console.log(response.status)
    }
    else{
    const datamora = { nomemora: nome , emailmora: email , senhamora: senha , blocomora: bloco , apartmora: apart };
    const response = await api.put('morador' , datamora, {
      headers:{
        authorization:id_mora
      }
    });
    MsgAviso()
    console.log(response.status)
    }
  }

  
 return (

  
  <View style={glb.container}>

    <Header/>
 
    <ScrollView>
      <View style={style.viewDescription}>
        <View style={style.viewText}>
            <Text style={style.textDescription}>Aqui você irá conseguir alterar todas suas informações da sua conta
            e alterar até mesmo a sua foto de usuário!</Text>
        </View>
        <View style={style.viewAnimation}>
          <LottieView autoSize={false} speed={0.6} source={edit} autoPlay={true} loop />
        </View>
      </View>
      <View style={style.viewForm}>
        <View style={style.avatar}>
         <Img/>
      <TouchableOpacity style={style.buttonEditImg} onPress={() => upload()}>
        <Text style={style.textButton}>Salvar Imagem</Text>
      </TouchableOpacity>
        </View>
        <Text style={style.textForm}>Nome</Text>
        <Input inputStyle={{fontFamily:'Manrope-Light' , fontSize:16}} placeholder='Nome' value={nome} onChangeText={(text) => setnome(text)}/>
        <Text style={style.textForm}>E-mail</Text>
        <Input inputStyle={{fontFamily:'Manrope-Light' , fontSize:16}} placeholder='E-mail' value={email} onChangeText={(text) => setEmail(text)}/>
        <Text style={style.textForm}>Senha</Text>
        <Input inputStyle={{fontFamily:'Manrope-Light' , fontSize:16}} placeholder='Senha Atual' secureTextEntry={true} value={senha} onChangeText={(text) => setSenha(text)}/>
        <Text style={style.textForm}>Confirmar senha</Text>
        <Input inputStyle={{fontFamily:'Manrope-Light' , fontSize:16}} secureTextEntry={true}/>
        <Text style={style.textForm}>Nova Senha</Text>
        <Input inputStyle={{fontFamily:'Manrope-Light' , fontSize:16}} placeholder='Opcional' secureTextEntry={true}/>
        <View style={style.line}>
          <View>
            <Text style={style.textForm}>Bloco</Text>
            <Input containerStyle={style.inputLine} inputStyle={{fontFamily:'Manrope-Light' , fontSize:16}} placeholder='E-mail' value={bloco} onChangeText={(text) => setBloco(text)}/>
          </View>
          <View>
            <Text style={style.textForm}>Apartamento</Text>
            <Input containerStyle={style.inputLine} inputStyle={{fontFamily:'Manrope-Light' , fontSize:16}} placeholder='E-mail' value={apart} onChangeText={(text) => setApart(text)}/>
          </View>
        </View>
      </View>
      <View style={style.buttons}>
      <TouchableOpacity style={style.buttonEdit} onPress={() => teste()}>
        <Text style={style.textButton}>Alterar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonDelete} onPress={() => MsgAviso()}>
        <Text style={style.textButton}>Excluir Conta</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
  </View>
 
  
  );
}