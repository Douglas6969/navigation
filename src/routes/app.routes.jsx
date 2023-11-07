import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Name from "../screens/Name";
import Cpf from "../screens/cpf";
import End from "../screens/End";





function AppRoutes(){

const {Screen, Navigator} = createNativeStackNavigator();

    return(
        <Navigator screensOptions={{headerShow: false}}>

            <Screen name="iniciar" component={Home}/>
            <Screen name="nomes" component={Name}/>
            <Screen name="cpf" component={Cpf}/>
            <Screen name="end" component={End}/>

        </Navigator>
    )

}
export default AppRoutes