// App.js
import { StyleSheet, View } from 'react-native';
import Start3 from './components/Start3';  // Import the Start component

export default function App() {
  return (
    <View style={styles.container}>
      <Start3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
