import { StyleSheet  , Dimensions} from 'react-native';

const widthMsg = Dimensions.get('window').width-20

const style = StyleSheet.create({
    nome:{
        fontFamily:'Manrope-Bold',
        fontSize:20,
        marginVertical:5,
        textAlign:'center'
    },
    assunto:{
        marginVertical:5,
        fontSize:18,
        textAlign:'center',
        fontFamily:'Manrope-Regular'

    },
    viewMsg:{
        alignItems:'center',
        width:widthMsg
    },
    msg:{
        fontFamily:'Manrope-Light',
        textAlign:'center'
    }
   
});
export default style