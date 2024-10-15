// components/NotificationComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Dummy data for notifications
const notifications = [
  {
    date: '2024-10-11',
    data: [
      {
        id: 1,
        message: '2024-10-13 er blevet opdateret i Warehouse af Martin Strøm Jespersen per 2024-10-11 10:24:26.',
        time: '12:25',
      },
    ],
  },
  // You can add more dates and notifications here.
];

const NotificationComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Ionicons name="notifications-outline" size={24} color="#01579b" />
      <View style={styles.notificationDetails}>
        <Text style={styles.notificationText}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  const renderSection = ({ item }) => (
    <View style={styles.section}>
      <Text style={styles.sectionDate}>{item.date}</Text>
      <FlatList
        data={item.data}
        keyExtractor={(notification) => notification.id.toString()}
        renderItem={renderNotification}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.date}
        renderItem={renderSection}
      />

      {/* Optional modal for additional actions */}
      <TouchableOpacity style={styles.optionsButton} onPress={toggleModal}>
        <Ionicons name="options-outline" size={24} color="#01579b" />
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
              <Text style={styles.modalButtonText}>Mark all as read</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sectionDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  notificationDetails: {
    flex: 1,
    marginLeft: 10,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  optionsButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
  },
  modalButton: {
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#01579b',
  },
});

export default NotificationComponent;
