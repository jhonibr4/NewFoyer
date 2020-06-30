import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const widthM = Dimensions.get("window").width/2 - 34;
const button = Dimensions.get("window").width-20;

const style = StyleSheet.create({
    
    container:{
        alignItems:'center',
        flex:1,
        backgroundColor:'#f0f0f5'
     },
    header:{
        width:width, 
        height:70,
        backgroundColor:'#4db8fe',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    img:{
        width:70,
        height:70,
        marginRight:widthM
        
    },
    buttonBack:{
      alignItems:'center',
      justifyContent:'center',
      marginLeft:5,
      backgroundColor:'#4db8fe',
      width:45,
      height:45,
      borderRadius:50
      
    },
    button:{
        backgroundColor:"#4db8fe",
        width:button,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginTop:20,
        marginBottom:20
    },
    textButton:{
        fontSize:20,
       color:'#FFF',
       fontFamily:"Manrope-Bold"
    },
    buttonOk:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        
    },
    animation:{
        justifyContent:'flex-start',
        backgroundColor:'#AFAA',
    }
})

export default style;