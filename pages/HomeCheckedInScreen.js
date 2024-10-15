import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import users from '../data/dummyData'; // Importing the user data

const HomeCheckedInScreen = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);  // Clear interval on component unmount
  }, []);

  // Convert seconds to hours, minutes, and seconds
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const user = users[0];  // Vladyslav Sliusarskyi

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hi, {user.name}</Text>
      <Text style={styles.subtitle}>You are checked in</Text>

      <View style={styles.timerContainer}>
        <Text style={styles.timerLabel}>Time elapsed:</Text>
        <Text style={styles.timer}>{formatTime(seconds)}</Text>
      </View>

      <TouchableOpacity style={styles.checkOutButton}>
        <Text style={styles.checkOutButtonText}>Check Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10,
  },
  timerContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  timerLabel: {
    fontSize: 18,
    color: '#333',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#01579b',
    marginTop: 10,
  },
  checkOutButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  checkOutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeCheckedInScreen;
