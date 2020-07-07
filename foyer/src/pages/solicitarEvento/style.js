import { StyleSheet, Dimensions } from 'react-native'

const widthInput = Dimensions.get('window').width-10;
const heightCalendar = Dimensions.get('window').width;
const widthView = Dimensions.get('window').width;
const inputLine = Dimensions.get('window').width/2+40;
const buttonLine = Dimensions.get('window').width/2-60;


const style = StyleSheet.create({
    titlePage:{
        fontFamily:'Manrope-ExtraBold',
        fontSize:20,
        marginVertical:5
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
      
    },
    containerInput:{
        marginRight:15
    },
    text:{
        marginLeft:1,
        fontSize:13,
        color:'#a6a6a6',
        fontFamily:'Manrope-SemiBold'
    },
    calendar:{
        height:heightCalendar,
       
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
viewAnimation:{
        justifyContent:'center',
        alignItems:'center',
        width:70,
        height:70,
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
buttonSearch:{
        width:buttonLine,
        backgroundColor:'#4db8fe',
        height:60,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    viewInput:{
      
       alignItems:'center',

    },

    //Modal

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
   
});
export default style;