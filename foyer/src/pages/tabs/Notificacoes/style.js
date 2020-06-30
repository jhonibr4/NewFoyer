import { StyleSheet , Dimensions } from 'react-native';

const widthHeader = Dimensions.get('window').width;
const widthCard = Dimensions.get('window').width-30;

const style = StyleSheet.create({
    header:{
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#4db8fe",
        width:widthHeader,
        flexDirection:'row'
    },
    textHeader:{
        marginTop:10,
        marginBottom:10,
        fontSize:24,
        color:'#FFF',
        fontFamily:"Manrope-Regular",
        textAlign:'center'
    },
    buttonHeader:{
      
        borderRadius:23,
        alignItems:'center',
        width:50
    },
    card:{
        width:widthCard,
        marginBottom:5
        
    },
    textCard:{
        fontFamily:"Manrope-Light"
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:15,
    },
    textButtonView:{
        fontFamily:"Manrope-Regular",
        color:'#a5a8a8'
    },
    textDescription:{
        color:'#a5a8a8',
        fontFamily:"Manrope-Light"
    },
    
    
});
export default style;