import { StyleSheet, Text, View } from "react-native";

export function Publicacao({ titulo, dataPublicacao }) {
    return (
        <View>
            <View style={styles.estruturaTitulo}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.subtitulo}>{dataPublicacao}</Text>
            </View>
            <Text style={styles.corpoTexto}>tself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is th</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    titulo: {
        fontSize: 18,
        fontWeight: 600
    },

    subtitulo: {
        fontSize: 10,
        color: 'gray'
    },

    estruturaTitulo: {
        marginBottom: 5,
        marginTop: 20
    },

    corpoTexto: {
        fontSize: 14,

    }
})