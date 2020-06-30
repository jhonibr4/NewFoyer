import { StyleSheet , Dimensions , Platform} from 'react-native';

const widthImage = Dimensions.get('window').width;
const heightImage = Dimensions.get('window').width-100;
 
const style = StyleSheet.create({
    image:{
        width:widthImage,
        height:heightImage
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:10,
        fontFamily: "Manrope-Bold",
        textAlign:'center'
    },
    description:{
        fontSize:14,
        color:'#a6a6a6',
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        lineHeight:22,
        textAlign:'justify',
        fontFamily:"Manrope-Light"
    }
}) 

export default style;