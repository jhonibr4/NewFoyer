import { StyleSheet , Dimensions } from 'react-native';

const widthButton = Dimensions.get('window').width

const style = StyleSheet.create({
    container:{
        
        flex:1,
        backgroundColor:'#f0f0f5'
     },
     viewAnimation:{
        
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'#f0f0f5'
     },
    buttonFab:{
        width:65,
        height:65,
        backgroundColor:'#4db8fe',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    lineFab:{
        marginRight:15,
        marginBottom:20,
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    animation:{
        marginTop:100,
        width:250,
        height:250
    },
    titleError:{
        marginTop:40,
        color:'#C3C3C3',
        fontSize:25,
        fontFamily:'Manrope-Bold'
    },
    textError:{
        color:'#C3C3C3',
        fontSize:25,
        fontFamily:'Manrope-Light',
        textAlign:'center'
    },
    buttonMsg:{
        width:widthButton,
        borderBottomWidth:1,
        borderBottomColor:'#C3C3C3',
   
    },
    infos:{
        marginVertical:10,
        flexDirection:'row'
    },
    header:{
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#4db8fe",
        width:widthButton,
        flexDirection:'row'
    },
    textHeader:{
        marginTop:10,
        marginBottom:10,
        fontSize:24,
        color:'#FFF',
        fontFamily:"Manrope-Regular",
        textAlign:'center'
    },
    buttonHeader:{
      
        borderRadius:23,
        alignItems:'center',
        width:50
    },
    viewText:{
        marginTop:5,
        marginLeft:10
    },
    nomeMsg:{
        fontFamily:'Manrope-Bold'
    },
    assuntoMsg:{
        fontFamily:'Manrope-Light'
    },
    lineRadio:{
        flexDirection:'row'
    },
    options:{
        marginVertical:10,
        marginHorizontal:5,
        flexDirection:'row',
        alignItems:'center',
        
    },
    radio:{
        marginLeft:15,
        
    },
    
});
export default style;