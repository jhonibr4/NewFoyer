import { StyleSheet , Dimensions } from 'react-native';

const widthBox = Dimensions.get('window').width;
const heightBox = Dimensions.get('window').height/2+15;
const widthLine = Dimensions.get('window').width-100;

const style = StyleSheet.create({
    boxInfos:{
        alignItems:'center',
        width:widthBox,
        height:heightBox,
        backgroundColor:"#4db8fe"
    },
    avatar:{
        marginTop:20,
    },
    viewAvatar:{
        backgroundColor:"#FFF",
        color:"#4db8fe"
    },
    title:{
        marginTop:5,
        color:"#FFF",
        fontSize:20,
        fontFamily:"Manrope-SemiBold"
    },
    infos:{
        color:"#FFF",
        fontSize:17,
        textAlign:"center",
        fontFamily:"Manrope-Light"

    },
    line:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:widthLine,
    
    },
    infoLine:{
        alignItems:'center'
        
    },
    buttons:{
        width:widthBox,
        borderColor:'#4db8fe',
        borderWidth:0,
        borderBottomWidth:1
    },
    textButtons:{
        color:'#4db8fe',
        fontFamily:"Manrope-SemiBold"
    }

});
export default style;