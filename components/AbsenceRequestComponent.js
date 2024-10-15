// components/AbsenceRequestComponent.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AbsenceRequestComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      {/* Absence Request Button */}
      <TouchableOpacity style={styles.essentialItem} onPress={toggleModal}>
        <Ionicons name="calendar-outline" size={24} color="#01579b" />
        <Text style={styles.essentialText}>Absence requests</Text>
      </TouchableOpacity>

      {/* Absence Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Your Absence Date</Text>
          
          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' }
            }}
          />

          <TouchableOpacity style={styles.submitButton} onPress={toggleModal}>
            <Text style={styles.submitButtonText}>Submit Absence Request</Text>
          </TouchableOpacity>

          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  essentialItem: {
    alignItems: 'center',
    marginVertical: 10,
  },
  essentialText: {
    marginTop: 5,
    fontSize: 14,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#01579b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AbsenceRequestComponent;
