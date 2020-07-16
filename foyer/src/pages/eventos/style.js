import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const heightEvento = Dimensions.get('window').height/3;

const style = StyleSheet.create({
    textTitle:{
        marginVertical:10,
        fontSize:20,
        textAlign:'center',
        fontFamily:'Manrope-ExtraBold',

    },
    viewEvento:{
        alignItems:'center',
        height:heightEvento,
        width:width-20,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginBottom:15
    },
    textEvento:{
        marginVertical:5,
        fontFamily:'Manrope-Bold',
        fontSize:15,
    },
    titleEvento:{
        fontFamily:'Manrope-Light',
        fontSize:15,
        
    },
    viewdescricao:{
        height:heightEvento/2-30,
        width:width-40, 
        
    },
    textDescricao:{
        textAlign:'center',
        color:'#a6a6a6'
    },
    
    buttonEvento:{
        flexDirection:'row'
    },
    textButtonView:{
        color:'#a5a8a8',
    },
    buttonView:{
        width:width-40,
   
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginTop:15,
    },
});
export default style;