import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppRoutes from './src/routes/app.routes';
import Routes from './src/routes';


export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:10,
    paddingVertical:30      
  },
});
