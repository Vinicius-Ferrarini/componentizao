import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Publicacao } from "./Publicacao";


const publicacoes = [
	{titulo: "Titulo 1", dataPublicacao: "01/02/2026", texto: "aaaaaaa"},
	{titulo: "Titulo 2", dataPublicacao: "10/03/2026", texto: "aaaaaaa"},
	{titulo: "Titulo 3", dataPublicacao: "20/04/2026", texto: "aaaaaaa"},

]
export default function RootLayout() {
	return (
		<SafeAreaView>
			<View style={styles.estruturaBasicaPagina}>
				{/* {
					publicacoes.map((publicacao)=>{
						return (
							<Publicacao titulo={publicacao.titulo} dataPublicacao={publicacao.dataPublicacao} />
						)
					})
				} */}

					{/* USAR O DE CIMA OOOUUU O DE BAIXO */}
				{
					publicacoes.map(function(publicacao){
						return(
							<Publicacao titulo={publicacao.titulo} dataPublicacao={publicacao.dataPublicacao} />
						)
					})
				}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	estruturaBasicaPagina: {
		marginHorizontal: 8,
		marginTop: 20
	}
})
