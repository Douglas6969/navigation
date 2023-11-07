import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";


function Inputs(props) {
    return (
        <View style={[styles.container]}>
            <TextInput keyboardType={props.tipo} onChangeText={props.sets} style={styles.input}></TextInput>
        </View>
    )
}
export default Inputs