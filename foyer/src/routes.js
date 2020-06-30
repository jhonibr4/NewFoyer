import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from './pages/login';
import  Options  from './pages/cadastro';
import  cadSind  from './pages/cadSind';
import  cadCond  from './pages/cadCond';
import  Sobre  from './pages/Sobre';
import  Tabs  from './pages/tabs';
import editProfile from './pages/editProfile';
import editCond from './pages/editCond';
import addCard from './pages/newCard'
import pageNoticia from './pages/pageNoticia'
import newMessage from './pages/newMessage'

const Stack = createStackNavigator();
export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Nova Mensagem" component={newMessage} /> 
                <Stack.Screen name="Editar Condominio" component={editCond} />
                <Stack.Screen name="Editar Perfil" component={editProfile} />
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="Cadastro Condomino" component={cadCond} />
                <Stack.Screen name="Cadastro Síndico" component={cadSind} />             
                <Stack.Screen name="Cadastro" component={Options} />
                <Stack.Screen name="Sobre" component={Sobre} /> 
                <Stack.Screen name="Adicionar Noticia" component={addCard} /> 
                <Stack.Screen name="Pagina Noticia" component={pageNoticia} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
