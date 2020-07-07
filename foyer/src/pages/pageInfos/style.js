import { StyleSheet , Dimensions} from 'react-native';

const widthView = Dimensions.get('window').width-20;
const widthButton = Dimensions.get('window').width/2-10;

const style = StyleSheet.create({
    textTitlePage:{
        marginVertical:10,
        fontSize:20,
        fontFamily:'Manrope-ExtraBold'
    },
    textTitleInfos:{
        fontSize:15,
        fontFamily:'Manrope-Bold',
        marginTop:10,
    },
    Infos:{
        fontSize:17,
        fontFamily:'Manrope-Light',
        textAlign:'center'
    },
    viewInfo:{
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#C3C3C3',
        width:widthView,
        paddingBottom:8
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
    lineButtons:{
        marginVertical:10,
        flexDirection:'row'
    },
    textButton:{
        fontFamily:'Manrope-Bold',
        color:'#FFF',
    },
});
export default style