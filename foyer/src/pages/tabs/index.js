import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';

//Tabs
import Inicio from './Inicio/index'
import Mensagens from './Mensagens/index';
import Perfil from './Perfil/index';
import Notificacoes from './Notificacoes/index';
import Agenda from './Agenda/index';


const tabConfig = {
        tabBarOptions:{
                showLabel:false
        }
}
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
                showLabel:false,
                inactiveBackgroundColor:"#4db8fe",
                activeBackgroundColor:"#95d4fc"
        }}>
      <Tab.Screen name="Inicio" component={Inicio}  options={{
              tabBarIcon: ({size, color}) => (
                <Icons name="home" size={size} color="#FFF"  />
              ) 
      }}/>
      <Tab.Screen name="Mensagens" component={Mensagens} options={{
              tabBarIcon: ({size, color}) => (
                <Icons name="inbox" size={size} color="#FFF" />
              ) 
      }}/>
      <Tab.Screen name="Perfil" component={Perfil} showIcon={true} options={{
              tabBarIcon: ({size, color}) => (
                <Icons name="user" size={size} color="#FFF"/>
              ) 
      }}/>
      <Tab.Screen name="Notificacoes" component={Notificacoes} showIcon={true} options={{
              tabBarIcon: ({size, color}) => (
                <Icons name="newspaper-o" size={size} style={{color:"#FFF"}}/>
              ) 
      }}/>
      <Tab.Screen name="Agenda" component={Agenda} showIcon={true} options={{
              tabBarIcon: ({size, color}) => (
                <Icons name="calendar" size={size} color="#FFF"/>
              ) 
      }}/>
    </Tab.Navigator>
  );
}
                





