import { StyleSheet , Dimensions } from 'react-native';

const widthImage = Dimensions.get('window').width-20;
const heightImage = Dimensions.get('window').width-150;
const widthBox = Dimensions.get('window').width-20;

const style = StyleSheet.create({
    imgSobre:{
        width:widthImage,
        height:heightImage,
    },
    box:{
        flex:1,
        margin:20,
        width:widthBox,
    },
    text:{
        marginTop:5,
        lineHeight:19,
        color:'#a6a6a6',
        textAlign:'justify',
        fontFamily:'Manrope-Light'
    }
});
export default style;