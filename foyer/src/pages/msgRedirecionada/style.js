import { StyleSheet , Dimensions } from 'react-native';

const widthView = Dimensions.get('window').width;
const widthInput = Dimensions.get('window').width-20;
const heightHeight = Dimensions.get('window').height/4;

const style = StyleSheet.create({
    avatar:{
        width:60,
        height:60,
        
        
    },
    avatarView:{
        width:60,
        height:60,
        
        marginLeft:10
    },
    line:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        
    },
    textNome:{
        marginLeft:10,
        fontFamily:'Manrope-Medium',
        fontSize:15
    },
    textForm:{
        marginBottom:5,
        marginTop:10,
        marginLeft:10,
        color:'#a6a6a6',
        fontFamily:'Manrope-Bold'
    },
    textareaContainer:{
        marginTop:5, 
        marginBottom:15,   
        height:150,
        width:widthView,
        alignItems:'center'
    }, 
    viewTextarea:{
        marginBottom:10,
        borderRadius:8,
        width:widthInput
        
       
    },
    textArea:{
        marginBottom:15,
        fontFamily:'Manrope-Medium',
        flex:1,
        width:widthInput,
        borderWidth:1,
        borderColor:'#C3C3C3',
        borderRadius:8,

    },
    viewPerfil:{
        borderWidth:1,
        borderRadius:8,
        borderColor:"#C3C3C3",
        width:widthInput,
        height:heightHeight-40,
        alignItems:'center',   
        flexDirection:'row'
    },
    buttonEdit:{
        width:150,
        height:50,
        backgroundColor:'#4db8fe',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    },
    textButton:{
        color:'#FFF',
        fontFamily:'Manrope-Bold'
    },
});
export default style;