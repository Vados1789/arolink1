import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';  // Added SafeAreaView
import Ionicons from 'react-native-vector-icons/Ionicons';
import VacationComponent from '../components/VacationComponent';
import AbsenceRequestComponent from '../components/AbsenceRequestComponent';
import OpenShiftsComponent from '../components/OpenShiftsComponent';
import { useNavigation } from '@react-navigation/native';
import users from '../data/dummyData'; // Importing the user data

const HomeScreen = () => {
  const navigation = useNavigation();

  // Mock shifts, added one for tomorrow
  const shifts = [
    {
      startTime: '08:00',
      endTime: '16:00',
      date: 'Tue, 15 October',
      duration: '8 hours',
      location: 'Arolink office',
    },
    {
      startTime: '06:00',
      endTime: '14:00',
      date: 'Wed, 16 October', // Tomorrow's shift
      duration: '8 hours',
      location: 'Warehouse',
    }
  ];

  const handleCheckIn = () => {
    navigation.navigate('HomeCheckedInScreen');
  };

  // Display user from dummy data
  const user = users[0];  // Vladyslav Sliusarskyi

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hi, {user.name}</Text>
      <Text style={styles.subtitle}>You have an upcoming shift</Text>

      <View style={styles.shiftContainer}>
        <View style={styles.shiftHeader}>
          <Text style={styles.shiftTitle}>Upcoming shift (Tomorrow)</Text>
        </View>

        <View style={styles.shiftDetails}>
          <View style={styles.shiftTime}>
            <Text style={styles.shiftTimeText}>{`${shifts[1].startTime} - ${shifts[1].endTime}, ${shifts[1].duration}`}</Text>
            <Text style={styles.shiftDate}>{shifts[1].date}</Text>
          </View>
          <View style={styles.shiftLocation}>
            <Ionicons name="location-outline" size={20} color="#01579b" />
            <Text style={styles.locationText}>{shifts[1].location}</Text>
          </View>
          <TouchableOpacity style={styles.checkInButton} onPress={handleCheckIn}>
            <Text style={styles.checkInButtonText}>Check In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.essentials}>
        <VacationComponent />
        <AbsenceRequestComponent />
        <OpenShiftsComponent />
      </View>
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
  shiftContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  shiftHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shiftTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shiftDetails: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
  },
  shiftTime: {
    flexDirection: 'column',
  },
  shiftTimeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shiftDate: {
    fontSize: 14,
    color: '#01579b',
    marginVertical: 5,
  },
  shiftLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  checkInButton: {
    backgroundColor: '#01579b',
    paddingVertical: 10,
    marginTop: 15,
    borderRadius: 5,
  },
  checkInButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  essentials: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  essentialItem: {
    marginVertical: 15,
  },
});

export default HomeScreen;
