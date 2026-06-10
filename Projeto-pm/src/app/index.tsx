import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
   <View style={styles.container}>
    <Text style={styles.titulo}>HOME</Text>
    <Text style={stylea.subtitulo}>Bem vindo a o nosso APP!!</Text>
    <TouchableOpacity
    
    style= {styles.buton}
    onPress={router.push('/detalhes')}
    >
      <Text style={styles.textobuton}>Detalhes</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
