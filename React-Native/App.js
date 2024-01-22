
import { StyleSheet,  View } from 'react-native';
import Title from './src/components/title/index';
import Principal from './src/components/Form/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Principal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});
