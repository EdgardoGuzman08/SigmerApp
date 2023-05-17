import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';      //useState son variables de estado
//import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Estilos from '../componetes/Estilos';
import wallhaven from '../../assets/wallhaven.jpg';
import Axios from '../componetes/Axios';
import UsuarioContext from '../contexto/UsuarioContext';

const Login = () => {     //el nombre y la constante del componenente se llaman igual
    //variables de estado con su metodo
    const [usuario, setUsuario] = useState(null);
    const [contrasena, setContrasena] = useState(null);
    const [validarUsuario, setValidarUsuario] = useState(false);
    const [validarContrasena, setValidarContrasena] = useState(false);
    const { setLogin } = useContext(UsuarioContext);
    useEffect(() => {
        if (!usuario) {
            setValidarUsuario(true);
        }
        else if (usuario.length < 3) {
            setValidarUsuario(true);
        }
        else {
            setValidarUsuario(false);
        }
        if (!contrasena) {
            setValidarContrasena(true);
        }
        else if (contrasena.length < 6) {
            setValidarContrasena(true);
        }
        else {
            setValidarContrasena(false);
        }
    }, [usuario, contrasena]);            
    const iniciarSesion = async() => {
        console.log(usuario);
        if (!validarUsuario && !validarContrasena) {
            await setLogin({usuario: usuario, contrasenia: contrasena});
                /*await Axios.post(
                '/autenticacion/iniciosesion',
                {
                    usuario: usuario,
                    contrasena: contrasena
                }
            ).then((data) => {

                const json = data.data;
                console.log(json);
                if (json.errores.length == 0) {
                    const token = json.data.token;
                    const usu = json.data.usuario;
                    console.log(token);
                    console.log(usu);
                    Alert.alert('Iniciar Sesion', 'Bienvenido ' + usu.nombre + ' ' + usu.apellido);
                }
                else {
                    const errores = json.errores;
                    var e = '';
                    errores.forEach(element => {
                        e = e + element.mensaje + '. ';
                    });
                    Alert.alert('Iniciar Sesion', e);
                }

            }).catch((er) => {
                console.log(er);
                Alert.alert('Iniciar Sesion', 'La API no esta activa o no se permite conectar');
            });*/
        }
        else{
            Alert.alert('Iniciar Sesion', 'Debe enviar datos correctos'); 
        }
    };

    return (
        //Titulo
        <View style={Estilos.contenedorPrincipal}>
            <View style={Estilos.contenedorTitulo}>
                <ImageBackground
                    source={wallhaven}
                    resizeMode='stretch'
                    style={Estilos.imagenFondo}
                >
                    <Text style={Estilos.textoTitulo}>Inicio Sesión</Text>
                </ImageBackground>
            </View>
            
            <View style={Estilos.contenedorContenido}>
            
                <View style={Estilos.contenedorControlesL}>
                <FontAwesome style={Estilos.searchIcon} name="user" size={35} ></FontAwesome>
                    <TextInput style={validarUsuario ? Estilos.entradaError : Estilos.input}
                        
                        placeholder='Escriba el correo o usuario                        '
                        value={usuario}                 //Captura el valor de la caja de texto y lo guarda en la variable
                        onChangeText={setUsuario}>      
                    </TextInput>
                    {
                        //nomenclatura de un if else de forma ? () : ()
                        validarUsuario ? (
                            <>
                            </>
                        ) : (<></>)
                    }

                </View>
                <View style={Estilos.contenedorControlesL}>
                <FontAwesome style={Estilos.searchIcon} name="lock" size={35} ></FontAwesome>
                    <TextInput style={validarContrasena ? Estilos.entradaError : Estilos.input}
                        placeholder='Escriba su contraseña                                '
                        secureTextEntry={true}
                        value={contrasena}
                        onChangeText={setContrasena}>
                        </TextInput>
                    {
                        validarContrasena ? (
                            <>
                            </>
                        ) : (<></>)
                    }
                </View>

                <View style={Estilos.contenedorBotones}>
                    <View style={Estilos.boton}>
                        <Button
                            title='Entrar'
                            color={'#000'}
                            onPress={iniciarSesion}
                        ></Button>
                    </View>
                    <View style={Estilos.boton}>
                        <Button
                            title='Salir'
                            color={'red'}
                        ></Button>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Login;