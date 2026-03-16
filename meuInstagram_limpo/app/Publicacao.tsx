import { StyleSheet, Text, View } from "react-native";

export function Publicacao({ titulo, dataPublicacao, texto }) {
    return (
        <View style={styles.publicacao}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.dataPublicacao}>{dataPublicacao}</Text>
            </View>
            <Text style={styles.corpoDoTexto}>{texto}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    cabecalho: {
        marginBottom: 5
    },

    publicacao: {
        marginTop: 10
    },

    titulo: {
        fontSize: 22,
        fontWeight: 600
    },

    dataPublicacao: {
        fontSize: 12
    },
    corpoDoTexto: {

    }

})


// export function BotaoBla() {
//     return (
//         <>
//             <Text>Isso é um botaozin ruim</Text>
//         </>

//     )
// }