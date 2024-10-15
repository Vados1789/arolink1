import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Button, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import openShifts from '../data/dummyOpenShifts';  // Import dummy open shifts data

const OpenShiftsComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      {/* Open Shifts Button */}
      <TouchableOpacity style={styles.essentialItem} onPress={toggleModal}>
        <Ionicons name="briefcase-outline" size={30} color="#01579b" />
        <Text style={styles.essentialText}>Open shifts</Text>
      </TouchableOpacity>

      {/* Open Shifts Modal */}
      <Modal visible={isModalVisible} animationType="slide">
        <SafeAreaView style={styles.modalContent}>
          <Text style={styles.modalTitle}>Available Open Shifts</Text>

          <FlatList
            data={openShifts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.shiftItem}>
                <Text style={styles.shiftTitle}>{item.position}</Text>
                <Text style={styles.shiftDetails}>{`${item.date}, ${item.time}`}</Text>
                <Text style={styles.shiftLocation}>
                  <Ionicons name="location-outline" size={16} /> {item.location}
                </Text>
                <Text style={styles.shiftDuration}>{item.duration}</Text>
              </View>
            )}
          />

          <Button title="Close" onPress={toggleModal} />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  essentialItem: {
    flexDirection: 'column',  // Stack icon and text vertically
    alignItems: 'center',     // Center the icon and text
    marginVertical: 10,
  },
  essentialText: {
    marginTop: 5,  // Add some space between the icon and text
    fontSize: 14,
    color: '#01579b',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  shiftItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  shiftTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shiftDetails: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  shiftLocation: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  shiftDuration: {
    fontSize: 14,
    color: '#01579b',
  },
});

export default OpenShiftsComponent;
