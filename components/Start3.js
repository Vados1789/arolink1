// components/Start.js
import React, { useEffect, useRef } from 'react';
import { StyleSheet, ImageBackground, View, Animated } from 'react-native';
import Login from './Login'; // Import the Login component

const Start3 = () => {
  const translateY = useRef(new Animated.Value(0)).current; // Create an animated value

  useEffect(() => {
    const moveImage = () => {
      Animated.timing(translateY, {
        toValue: -150, // Move the image up by 150 units
        duration: 2000, // Duration of the animation
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    };

    const timer = setTimeout(moveImage, 2000); // Move image after 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [translateY]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedView, { transform: [{ translateY }] }]}>
        <ImageBackground
          source={require('../assets/images/Arolink1.png')}
          resizeMode='contain'
          style={styles.backgroundImage}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  animatedView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Full width for centering
  },
  backgroundImage: {
    width: '80%', // Adjust the width of the image as needed
    height: '40%', // Adjust the height of the image
  },
});

export default Start3;
