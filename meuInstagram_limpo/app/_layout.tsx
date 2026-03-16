import { StyleSheet, Text, View, Image } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';

function Publicacao(props) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image
          style={styles.foto_perfil}
          source={{ uri: props.fotoPerfil }}
        />
        <Text style={styles.nome_usuario}>{props.nome}</Text>
      </View>
      <Image
        style={styles.tinyLogo}
        source={{ uri: props.fotoPost }}
      />
      <View style={styles.barra_acoes}>
        <Ionicons name="heart-outline" size={24} color="black" style={{marginRight: 10}} />
        <Text style={styles.texto_curtidas}>{props.curtidas}</Text>
        <Ionicons name="chatbubble-outline" size={24} color="black" style={{marginRight: 10}} />
        <Ionicons name="paper-plane-outline" size={24} color="black" />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View> 
      <View style={styles.container}>

        <Publicacao 
          nome="Vinicius" 
          curtidas={127}
          fotoPerfil="https://picsum.photos/200" 
          fotoPost="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-do-brasil-capa2019-820x431.jpg" 
        />

        <Publicacao 
          nome="Vinicius" 
          fotoPerfil="https://picsum.photos/200" 
          fotoPost="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-do-brasil-capa2019-820x431.jpg" 
        />

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center', 
    backgroundColor: '#ecf0f1',
  },
  header: {
    alignItems: 'center', 
    flexDirection: 'row',
    marginBottom: 15,
  },
  foto_perfil: {
    width: 20, 
    height: 20,
    borderRadius: 25, 
  },
  nome_usuario: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5, 
  },
  tinyLogo: {
    width: 320,
    height: 220,
    borderRadius: 15, 
  },
  barra_acoes: {
  flexDirection: 'row',
  alignSelf: 'flex-start',  
  paddingLeft: 10,          
  marginTop: 10,            
  },
  
});