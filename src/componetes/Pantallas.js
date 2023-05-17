import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../pantallas/Login';
import MenuTab from './MenuTab';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from './Cargando';
import Lateral from './LateralTab';
import PerfilUsuario from '../pantallas/PerfilUsuario';
import ListaUsuarios from '../pantallas/ListaUsuarios';
import GuardarTipos from '../pantallas/GuardarTipos';
import { color } from 'react-native-reanimated';
import { useState } from 'react';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Pantallas = () => {
    const { aplicacionIniciada, setDatos, sesionIniciada } = React.useContext(UsuarioContext);
    setDatos();
    //console.log(aplicacionIniciada)
    if (aplicacionIniciada) {

        return (
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    overlayColor: "transparent"
                }}
                defaultStatus= "open"
            >
                {sesionIniciada ? (

                    <>
                        <Stack.Screen name="Menu" component={MenuTab} />
                        <Stack.Screen name="Perfil" component={PerfilUsuario}/>
                        <Stack.Screen name="Lista Usuarios" component={ListaUsuarios}/>
                        <Stack.Screen name="Guardar Tipos" component={GuardarTipos}/>
                        
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                    </>
                )
                }
            </Drawer.Navigator>
            
        );
    }
    else {
        return <Cargando texto="Cargando aplicación"/>;
    }

}
export default Pantallas;