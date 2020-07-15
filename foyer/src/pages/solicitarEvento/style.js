import { StyleSheet, Dimensions } from 'react-native'

const widthInput = Dimensions.get('window').width-10;
const heightCalendar = Dimensions.get('window').width;
const widthView = Dimensions.get('window').width;
const inputLine = Dimensions.get('window').width/2+40;
const buttonLine = Dimensions.get('window').width/2-60;


const style = StyleSheet.create({
    titlePage:{
        fontFamily:'Manrope-ExtraBold',
        fontSize:20,
        marginVertical:5
    },
    textData:{
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,
        borderBottomColor:'#4db8fe',
        width:widthInput,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        marginTop:3,
        height:50
        
      
    },
    input:{
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,
        borderBottomColor:'#4db8fe',
        width:widthInput,
        alignItems:'center',
        textAlign:'center',
        marginTop:3,
        
      
    },
    containerInput:{
        marginRight:15
    },
    text:{
        marginLeft:1,
        fontSize:13,
        color:'#a6a6a6',
        fontFamily:'Manrope-SemiBold'
    },
  
    inputDate:{
        height:50,
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,
        borderBottomColor:'#4db8fe',
        width:widthInput,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        marginTop:3,
    },
    textDate:{
        fontFamily:'Manrope-Light'
    },  
    calendar:{
        height:heightCalendar,
       
    },
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
        fontFamily:'Manrope-Medium',
        textAlign:'justify',
        
    },
viewAnimation:{
        justifyContent:'center',
        alignItems:'center',
        width:70,
        height:70,
    },
    line:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputLine:{
       
        width:inputLine,
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomColor:'#4db8fe',
    },
buttonSearch:{
        width:buttonLine,
        backgroundColor:'#4db8fe',
        height:60,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    viewInput:{
      
       alignItems:'center',

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
        borderWidth:2,
        borderColor:'#4db8fe',
        borderRadius:8,

    },
    
   
});
export default style;