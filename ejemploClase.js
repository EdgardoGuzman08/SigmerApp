import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.contenedorPrincipal}>

      <View style={styles.contenedorTitulo}>
        <Text style={styles.textoTitulo}>TITULO</Text>
      </View>

      <View style={styles.contenedorContenido}>
        <Text>Contenido1</Text>
        <Text>Contenido 2</Text>
        <Button></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    flexDirection: "column", //flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  contenedorTitulo: {
    backgroundColor: '#FAD7A0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    padding: 10,
    borderColor: "#FAD7A0",
    borderWidth:1,
    borderRadius: 10
  },
   contenedorContenido: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#FAD7A0",
    borderWidth:1,
    width: '100%'
  },
  textoTitulo: {
  //backgroundColor: '#fff',
   fontSize: 24,
   fontWeight: '900',
 },
});
