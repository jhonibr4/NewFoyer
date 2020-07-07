import { StyleSheet , Dimensions } from 'react-native';

const widthLine = Dimensions.get('window').width;
const heightLine = Dimensions.get('window').height/5;
const widthButton = Dimensions.get('window').width/2-60;

const style = StyleSheet.create({
    viewProfile:{
        width:widthLine,
       
        flexDirection:'row',
        marginVertical:20,
        marginLeft:5
    },
    info:{
        
        marginLeft:10
    },
    nome:{
        fontFamily:'Manrope-Bold'
    },
    textBloco:{
       
        fontFamily:'Manrope-ExtraLight',
    },
    textApart:{
        marginLeft:5,
        fontFamily:'Manrope-ExtraLight',
    },
    infoApart:{
        flexDirection:'row'
    },
    buttonAccept:{
        marginLeft:5,
        width:widthButton,
        height:50,
        backgroundColor:'#4db8fe',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonReject:{
        marginLeft:5,
        width:widthButton,
        height:50,
        backgroundColor:'#ff7071',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonInfo:{
        marginLeft:5,
        width:50,
        height:50,
        backgroundColor:'#4db8fe',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    textButton:{
        fontFamily:'Manrope-Bold',
        color:'#FFF',
    },
    lineButton:{
        flexDirection:'row'
    }
});
export default style;