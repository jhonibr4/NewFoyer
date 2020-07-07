import { StyleSheet , Dimensions } from 'react-native';

const widthInput = Dimensions.get('window').width-15;
const inputLine = Dimensions.get('window').width/2-20;
const selectLine = Dimensions.get('window').width/2-20;
const buttonLine = Dimensions.get('window').width/2-25;


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f5',
        alignItems:'center'
    },
    input:{
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,
        borderBottomColor:'#4db8fe',
        width:widthInput,
        alignItems:'center',
        textAlign:'center',
        marginTop:3,
        fontFamily:'Manrope-Light'
    },
    title:{
        fontFamily:'Manrope-Bold',
        fontSize:23,
        marginTop:10,
        marginBottom:15,
        textAlign:'center'

    },
    text:{
        fontSize:13,
        color:'#a6a6a6',
        fontFamily:'Manrope-SemiBold'
    },
    select:{
        marginTop:5,
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomColor:'#4db8fe',
        width:widthInput,
    },
    line:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputLine:{
       
        width:inputLine,
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomColor:'#4db8fe',
    },
    widthSelect:{
        width:selectLine,
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomColor:'#4db8fe',
    },
    selectLine:{
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomColor:'#4db8fe',
    },
    buttonSearch:{
        width:buttonLine,
        backgroundColor:'#4db8fe',
        height:60,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    infoCond:{
        borderBottomWidth:2,
        borderBottomEndRadius:8,
        borderBottomColor:'#a6a6a6',
        paddingBottom:5,
        marginTop:5,
        fontSize:20,
        color:'#a6a6a6'
    }
});

export default style;

