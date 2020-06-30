import { StyleSheet , Dimensions } from 'react-native';

const widthHeader = Dimensions.get('window').width;
const widthButton = Dimensions.get('window').width;
const heightCalendar = Dimensions.get('window').width;

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        backgroundColor:'#f0f0f5'
     },
    header:{
        alignItems:'center',
        backgroundColor:"#4db8fe",
        width:widthHeader
    },
    textHeader:{
        marginTop:10,
        marginBottom:10,
        fontSize:24,
        color:'#FFF',
        fontFamily:"Manrope-Regular"
    },
    buttons:{
        width:widthButton,
        borderColor:'#4db8fe',
        borderWidth:0,
        borderBottomWidth:1,
        marginBottom:50,
        
    },
    textButtons:{
        color:'#4db8fe',
        fontFamily:"Manrope-SemiBold"
    },
    calendar:{
        height:heightCalendar,
        fontFamily:"Manrope-Bold"
    },
    
});
export default style;