import { StyleSheet , Dimensions } from 'react-native';

const button = Dimensions.get("window").width-30;


const style = StyleSheet.create({
    
    text:{
        marginTop:60,
        marginBottom:20,
        textAlign:'center',
        fontSize:20,
        fontFamily:'Manrope-Bold'          
    },
    textRadio:{
        fontSize:20,
        marginRight:10,
        marginLeft:5,
        fontFamily:'Manrope-Medium',
    },  
    
    textDescription:{
        marginTop:10,
        marginHorizontal:30,
        color:'#a6a6a6',
        fontSize:15,
        textAlign:'justify',
        lineHeight:20,
        fontFamily:'Manrope-Light'
    },

    options:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        
    },
    radio:{
        marginLeft:15,
        
    },
    
    
   

})
export default style;