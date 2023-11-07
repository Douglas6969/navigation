import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


function Butons(props) {

    return (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={props.telas} style={[styles.button, { backgroundColor: props.corFundo }]}>
                <Text style={styles.text}>{props.texto}</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Butons