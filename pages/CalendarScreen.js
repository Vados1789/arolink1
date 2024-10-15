import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'; // Import calendar components
import { useNavigation } from '@react-navigation/native';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    console.log('selected day', day);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>October 2024</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get iCalendar</Text>
        </TouchableOpacity>
      </View>

      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: '#01579b' },
          '2024-10-13': { marked: true, dotColor: 'blue' }, // Example of another marked date
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#01579b',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#01579b',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
        }}
      />

      {/* Display selected shifts or details for the day */}
      <View style={styles.shiftContainer}>
        <Text style={styles.shiftTitle}>Upcoming Shifts</Text>
        <View style={styles.shiftCard}>
          <Text style={styles.shiftText}>06:00 - 18:00, 30 min</Text>
          <Text style={styles.shiftText}>Warehouse</Text>
          <Text style={styles.shiftText}>Sun, 13 October</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#01579b',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#01579b',
    fontSize: 14,
  },
  shiftContainer: {
    padding: 20,
  },
  shiftTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shiftCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  shiftText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CalendarScreen;
