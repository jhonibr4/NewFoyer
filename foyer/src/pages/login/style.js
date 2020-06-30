import { StyleSheet ,Dimensions } from 'react-native';

const inputWidth = Dimensions.get('window').width-20;
const imgWidth = Dimensions.get('window').width;
const imgHeight = Dimensions.get('window').height;
const style = StyleSheet.create({
     
     
     logo:{
        borderRadius:25,
        marginTop:30,
        marginBottom:10,
        width:150,
        height:150
     },
     input:{
         
        paddingHorizontal:15,
        borderRadius:8,
        width:inputWidth-40,
        backgroundColor:'#f0f0f5',
        alignItems:'center',
        fontFamily:'Manrope-Light'
     },
     
    imgback:{
        flex:1,
        resizeMode:"cover",
        alignItems:'center',
        height:imgHeight,
        width:imgWidth
        
    },
    button:{
        backgroundColor:"#d1edff",
        marginTop:10,
        width:150,
        height:50,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontFamily:'Manrope-SemiBold'
    },
    lineForget:{
       
        width:inputWidth-10
    },
    buttonForget:{
        alignItems:'flex-end',
        marginTop:5,
        
    },
    textForget:{
        color:'#f0f0f5',
        fontFamily:'Manrope-SemiBold'
    },
    textRadio:{
        fontSize:16,
        marginRight:10,
        marginLeft:5,
        color:'#FFF',
        fontFamily:'Manrope-SemiBold'
    },
    textType:{
        fontSize:21,
        fontFamily:'Manrope-ExtraBold',
        color:'#FFF'

    },
    options:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
    },
    lineRadio:{
        flexDirection:'row'
    },
    lineInput:{
        borderRadius:8,
        justifyContent:'center',
        width:inputWidth,
        height:60,
        marginTop:25,
        alignItems:'center',
        backgroundColor:"#f0f0f5",
        flexDirection:'row'
    }
    
})

export default style;