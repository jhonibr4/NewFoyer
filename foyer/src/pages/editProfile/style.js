import { StyleSheet , Dimensions} from 'react-native';

const widthView = Dimensions.get('window').width;
const widthInput = Dimensions.get('window').width/2;

const style = StyleSheet.create({
    container:{
        backgroundColor:'#E02121',
        alignItems:'center'
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
    viewText:{
        justifyContent:'center'
    },
    viewAnimation:{
        justifyContent:'center',
        alignItems:'center',
        width:70,
        height:70,
    },
    viewForm:{
        flex:1,
        width:widthView
    },
    textForm:{
        marginLeft:10,
        color:'#a6a6a6',
        fontFamily:'Manrope-Bold'
    },
    line:{
        flexDirection:'row'
    },
    inputLine:{
        width:widthInput
    },
    buttons:{
        alignItems:'center',
        marginTop:20
    },
    buttonEdit:{
        width:150,
        height:50,
        backgroundColor:'#4db8fe',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonEditImg:{
        marginTop:15,
        width:150,
        height:50,
        backgroundColor:'#4db8fe',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonDelete:{
        alignItems:'center',
        justifyContent:'center',
        width:150,
        height:50,
        backgroundColor:'#ff7071',
        borderRadius:8,
        marginTop:10,
        marginBottom:20
    },
    textButton:{
        color:'#FFF',
        fontFamily:'Manrope-Bold'
    },
    avatar:{
        alignItems:'center',
        marginTop:20,
    },
    viewAvatar:{
        backgroundColor:"#FFF",
        color:"#4db8fe"
    },
});
export default style;