import { StyleSheet, Text, View, Button } from 'react-native';


const Estilos = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 30,
    },
    contenedorTitulo: {
        backgroundColor: '#000',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        width: '100%',
        height: 220,                //dpi es una unidad de resolución por defecto
        /* padding: 10,
         borderColor: "#FAD7A0",
         borderWidth:1,
         borderRadius: 10*/
    },
    contenedorContenido: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#25d366',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        /* borderColor: "#FAD7A0",
            borderWidth:1,*/
        width: '100%',
        padding: 20,
    },
    textoTitulo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '900',
        textAlign: "center",
    },
    imagenFondo:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    contenedorControles:{
        flexDirection: 'column',
        marginTop: 10,          //margen arriba
        marginBottom: 20,       //margen abajo
        
    },
    contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-evenly', //Distribución equitativa
        marginTop: 10,
        marginBottom: 10,
    },
    entrada:{
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
    },
    entradaError:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
    },
    etiquetas:{
        fontSize: 20,
        marginBottom: 5,    //margen
    },
    etiquetaError:{
        fontSize: 12,
        marginBottom: 5,
        marginLeft: 5,
        color: "red",
    },
    boton:{
        flex: 1,
        alignItems: 'stretch', //Alineacion de los elementos ocupando todo el espacio
        marginLeft: 10,
        marginRight: 10,        //Margenes para los lados
    },
    botonInicio:{
        flex: 1,
        marginLeft: 270,
        paddingBottom: 80,
        alignItems:'center'
    },
    botonInicio1:{
        flex: 1,
        paddingBottom: 80,
        alignItems:'center'
    },
    contenedorControlesL:{
        flexDirection: 'row',
        marginTop: 20,          //margen arriba
        marginBottom: 20,       //margen abajo
    },
    searchIcon: {
        padding: 10,        
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 16,
    },
    parrafos:{
        marginTop: 30,
        textAlign: 'justify',
        backgroundColor: '#fff',
        fontWeight: '900',
        fontSize: 16
    },
    espiFondo:{
        height: 170,
        width: 185,
        marginLeft: 20,
        marginRight: 20,
    },
    contenedorFotos:{
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-evenly',
        
    },
    subTitulo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        textAlign: "center",
        marginTop: 40,          //margen arriba
    },
    nombreimagen: {
        color: '#000',
        fontSize: 20,
        fontWeight: '900',
        textAlign: "center",
        paddingTop: 140
    },
    contenedorBotonesP:{
        flexDirection: 'row',
        justifyContent: 'space-evenly', //Distribución equitativa
        marginTop: 10,
        marginBottom: 10,
    },
    boton2:{
        flex: 1,
        alignItems: 'stretch',
        marginLeft: 10,
        marginRight: 10,
    },
});
export default Estilos;
