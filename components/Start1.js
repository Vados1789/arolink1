import React, { useEffect, useRef } from 'react';
import { StyleSheet, ImageBackground, View, Text, Animated } from 'react-native';

export default function Start1() {
  const animatedValue = useRef(new Animated.Value(0)).current; // Create a reference for animation

  useEffect(() => {
    // Start the animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 3000, // Duration of the move
          useNativeDriver: true, // Use native driver for better performance
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 3000, // Duration of the move back
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animatedValue]);

  // Interpolating the animated value to move the image up and down
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20], // Change these values to control the movement
  });

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Animated.View style={{ ...styles.backgroundImage, transform: [{ translateY }] }}>
          <ImageBackground
            source={require('../assets/images/Arolink1.png')} // Your image
            resizeMode='contain' // Keep it as before
            style={styles.backgroundImage}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}></Text>
            </View>
          </ImageBackground>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: 'white', // Set a simple white background
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%', // Full width
    height: '100%', // Full height
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent overlay
  },
  text: {
    fontSize: 36, // Increased font size for visibility
    fontWeight: 'bold', // Make it bold for emphasis
    color: '#333', // Dark color for contrast
    textAlign: 'center', // Center the text
    padding: 20, // Add some padding
  },
});
