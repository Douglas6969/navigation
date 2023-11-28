import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    nome: {
        marginTop: 60,    
    },
    rg: {
        marginTop: 40
    },
    header: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: 250
    },
    botao: {
        marginTop: 80,
        flexDirection:'row',
    },
    titulo:{
        fontWeight:'bold',
        fontSize:18,
        color:'#333333',
        margin:15,
        marginTop:40
    },
    documento:{
        fontWeight:'600',
        fontSize:43,
        marginTop:20,
    },
    documentos:{
        alignItems:'center',
        marginTop:20
    },
    resposta:{
        fontWeight:'800',
        fontSize:25,
        color:'#6F6B73'
    }
})