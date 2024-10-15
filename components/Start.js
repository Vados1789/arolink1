// components/Start.js
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

const Start = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Arolink1.png')}  // Adjust path to your image
        resizeMode='contain'
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}></Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});

export default Start;
