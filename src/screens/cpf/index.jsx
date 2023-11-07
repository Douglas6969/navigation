import { Text, View } from "react-native"
import { styles } from "./styles"
import Butons from "../../components/Butons"
import { useNavigation, useRoute } from "@react-navigation/native"
import Texto from "../../components/Texto"
import Inputs from "../../components/Inputs"
import { useState } from "react"



function Cpf() {

    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const route = useRoute()
    const navigatiom = useNavigation()
    const {nome,sobrenome} = route.params   

    
    handleBack = () => {
        navigatiom.goBack()
    }
    const handleEnd = () => {
        navigatiom.navigate('end', { rg, cpf, nome,sobrenome })
    }

    return (
        <View style={styles.container}>

            <View style={styles.cpf}>
                <Texto texto='Informe seu CPF'></Texto>
                <Inputs sets={setCpf} ></Inputs>
            </View>

            <View style={styles.rg}>
                <Texto texto='Informe seu RG'></Texto>
                <Inputs sets={setRg} ></Inputs>
            </View>

            <View style={styles.botao}>
                <Butons telas={handleBack} corFundo='#860929' texto='VOLTAR'></Butons>
                <Butons telas={handleEnd} corFundo='#01633D' texto='PROXIMO'></Butons>
            </View>

        </View>
    )
}
export default Cpf