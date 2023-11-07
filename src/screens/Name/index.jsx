import { Text, View } from "react-native"
import { styles } from "./styles"
import Butons from "../../components/Butons"
import { useNavigation } from "@react-navigation/native"
import Texto from "../../components/Texto"
import Inputs from "../../components/Inputs"
import { useState } from "react"


function Name() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const navigatiom = useNavigation()

    handleCpf = () => {
        navigatiom.navigate('cpf', { nome, sobrenome })
    }
    
    return (
        <View style={styles.container}>

            <View style={styles.nome}>
                <Texto texto='Informe seu nome'></Texto>
                <Inputs sets={setNome}></Inputs>
            </View>

            <View style={styles.sobrenome}>
                <Texto texto='Informe seu sobrenome'></Texto>
                <Inputs sets={setSobrenome} ></Inputs>
            </View>

            <View style={styles.botao}>
                <Butons telas={handleCpf}  corFundo='#01633D' texto='PROXIMO'></Butons>

            </View>

        </View>
    )
}
export default Name