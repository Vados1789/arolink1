import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReportBugComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Bug Icon and Warning Text */}
      <View style={styles.warningSection}>
        <Ionicons name="alert-circle-outline" size={100} color="#007AFF" />
        <Text style={styles.titleText}>Are you sure you want to continue?</Text>
        <Text style={styles.descriptionText}>
          Reporting a bug informs us about an issue you noticed with the app performance. If assistance is what you're
          looking for, contact support instead.
        </Text>

        <View style={styles.warningBox}>
          <Ionicons name="warning-outline" size={20} color="#FF8800" />
          <Text style={styles.warningText}>You won’t receive a response from our support.</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigation.navigate('ContactSupport')}
        >
          <Text style={styles.contactText}>Contact support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('SubmitBugReport')} // Example for navigation
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF4E5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  warningText: {
    fontSize: 14,
    color: '#FF8800',
    marginLeft: 5,
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  contactButton: {
    backgroundColor: 'white',
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#007AFF',
  },
  continueButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  continueText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ReportBugComponent;
