import { Text, View } from "react-native"
import { styles } from "./styles"
import Butons from "../../components/Butons"
import { useNavigation } from "@react-navigation/native"


function Home() {

    const navigatiom = useNavigation()

    handleNomes = () => {
        navigatiom.navigate('nomes')
    }
    return (
        <View style={styles.container}>

            <Text style={styles.header}>UNIPAR</Text>

            <View style={styles.botao}>
                <Butons telas={handleNomes} corFundo='#01633D' texto='INICIAR'></Butons>
            </View>

        </View>
    )
}
export default Home