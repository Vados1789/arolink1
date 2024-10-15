import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';  // Added SafeAreaView
import Ionicons from 'react-native-vector-icons/Ionicons';
import VacationComponent from '../components/VacationComponent';
import AbsenceRequestComponent from '../components/AbsenceRequestComponent';
import OpenShiftsComponent from '../components/OpenShiftsComponent';  // Import OpenShiftsComponent

const HomeScreen = () => {
  // Mock shift data
  const shift = {
    startTime: '08:00',
    endTime: '16:00',
    date: 'Tue, 15 October',
    duration: '8 hours',
    location: 'Arolink office',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hi, Vladyslav Sliusarskyi</Text>
      <Text style={styles.subtitle}>You have an upcoming shift</Text>

      <View style={styles.shiftContainer}>
        <View style={styles.shiftHeader}>
          <Text style={styles.shiftTitle}>Upcoming shifts</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all (1)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shiftDetails}>
          <View style={styles.shiftTime}>
            <Text style={styles.shiftTimeText}>{`${shift.startTime} - ${shift.endTime}, ${shift.duration}`}</Text>
            <Text style={styles.shiftDate}>{shift.date}</Text>
          </View>
          <View style={styles.shiftLocation}>
            <Ionicons name="location-outline" size={20} color="#01579b" />
            <Text style={styles.locationText}>{shift.location}</Text>
          </View>
        </View>
      </View>

      <View style={styles.essentials}>
        {/* Stacking all components vertically */}
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
  seeAllText: {
    color: '#01579b',
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
  // Styles for vertically stacking the components
  essentials: {
    flexDirection: 'column',
    alignItems: 'center',  // Center the items horizontally
    marginVertical: 20,
  },
  essentialItem: {
    marginVertical: 15,  // Add some space between each component
  },
});

export default HomeScreen;
