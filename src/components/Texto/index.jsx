import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


function Texto(props) {
    return (
        <Text style={styles.texto}>{props.texto}</Text>
    )
}
export default Texto