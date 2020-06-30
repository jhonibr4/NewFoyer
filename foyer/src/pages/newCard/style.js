import { StyleSheet , Dimensions } from 'react-native';

const widthView = Dimensions.get('window').width;
const widthInput = Dimensions.get('window').width-20;

const style = StyleSheet.create({
    viewDescription:{
        width:widthView,
        height:160,
        backgroundColor:'#4db8fe',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
        
    },
    textDescription:{
        width:widthView-100,
        marginRight:10,
        color:'#FFF',
        fontSize:15,
        fontFamily:'Manrope-Medium',
        textAlign:'justify',
        
    },
    viewText:{
        justifyContent:'center'
    },
    viewAnimation:{
        justifyContent:'center',
        alignItems:'center',
        width:70,
        height:70,
    },
    viewForm:{
        
        flex:1,
        width:widthView
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
    button:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#4db8fe',
        width:150,
        height:50,
        borderRadius:8,
        marginBottom:20,
        marginTop:20,
    },
    textButton:{       
        color:'#FFF',
        fontFamily:'Manrope-Bold',
        fontSize:17
    },
    imgView:{
        width:widthView,
        height:widthView-100,
        borderRadius:10,
        borderColor:"#C3C3C3",
        borderWidth:3

    }
});
export default style;