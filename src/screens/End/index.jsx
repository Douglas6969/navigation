import { Text, View } from "react-native"
import { styles } from "./styles"
import Butons from "../../components/Butons"
import { useNavigation, useRoute } from "@react-navigation/native"
import Texto from "../../components/Texto"
import { useState } from "react"


function End() {

    const route = useRoute()
    const navigatiom = useNavigation()
    const {nome,sobrenome,rg,cpf} = route.params
 
    handleBack = () => {
        navigatiom.goBack()
    }
    handlehome = () => {
        navigatiom.navigate('iniciar')
    }
    

    return (
        <View style={styles.container}>

            <View style={styles.nome}>
                <Texto texto={'Ola, '+nome+ ' ' +sobrenome }/>
                <Text style={styles.titulo}>portador do documento</Text>
            </View>

            <View  style={styles.documentos}>
                <Text style={styles.documento}>CPF</Text>
                <Text style={styles.resposta}>{cpf}</Text>
                <Text style={styles.documento}>RG</Text>
                <Text style={styles.resposta}>{rg}</Text>
            </View>

            <View style={styles.botao}>
                <Butons telas={handleBack} corFundo='#860929' texto='VOLTAR'></Butons>
                <Butons telas={handlehome} corFundo='#01633D' texto='FINALIZAR'></Butons>
            </View>

        </View>
    )
}
export default End