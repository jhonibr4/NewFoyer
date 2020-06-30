import { StyleSheet , Dimensions } from 'react-native';

const widthImage = Dimensions.get('window').width-25;
const heightImage = Dimensions.get('window').width-100;
const widthBox = Dimensions.get('window').width-20;

const style = StyleSheet.create({
    imgSobre:{
        width:widthImage,
        height:heightImage,
        borderRadius:8
    },
    box:{
        flex:1,
        margin:10,
        width:widthBox,
        alignItems:'center'
    },
    titulo:{
        marginTop:10,
        fontSize:20,
        textAlign:'justify',
        fontFamily:'Manrope-Bold'
    },
    text:{
        fontSize:18,
        marginTop:15,
        lineHeight:23,
        color:'#a6a6a6',
        textAlign:'justify',
        fontFamily:'Manrope-Light'
    }
});
export default style;