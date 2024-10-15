import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dummyWorkersData from '../data/dummyWorkersData';  // Assuming you have dummy data for workers

const DepartmentScreen = () => {
  const renderWorkerItem = ({ item }) => (
    <View style={styles.workerItem}>
      <View style={styles.workerInfo}>
        <Ionicons name="person-outline" size={30} color="#01579b" />
        <View style={styles.workerDetails}>
          <Text style={styles.workerName}>{item.name}</Text>
        </View>
      </View>
      <View style={styles.shiftsContainer}>
        {item.shifts.map((shift, index) => (
          <View key={index} style={styles.shiftItem}>
            <Text>{shift.day}</Text>
            <Text>{shift.time}</Text>
            <Text>{shift.break}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* No ScrollView required here. Only use FlatList */}
      <FlatList
        data={dummyWorkersData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderWorkerItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  workerItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  workerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  workerDetails: {
    marginLeft: 10,
  },
  workerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shiftsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shiftItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default DepartmentScreen;
