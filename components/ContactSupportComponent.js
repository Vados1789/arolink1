import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactSupportComponent = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>AROLINK</Text>
      </View>

      {/* Help Options */}
      <View style={styles.helpSection}>
        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="chatbox-outline" size={24} color="#007AFF" />
          <Text style={styles.optionText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="help-circle-outline" size={24} color="#007AFF" />
          <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* Chat */}
      <TouchableOpacity style={styles.chatSection}>
        <Text style={styles.chatText}>Chat with us</Text>
        <Ionicons name="arrow-forward-outline" size={20} color="#007AFF" />
      </TouchableOpacity>

      {/* Search for Help */}
      <View style={styles.searchSection}>
        <TextInput style={styles.searchInput} placeholder="Search for help" />
        <Ionicons name="search-outline" size={24} color="#007AFF" />
      </View>

      {/* Help Topics */}
      <View style={styles.helpTopics}>
        <TouchableOpacity style={styles.topicItem}>
          <Text style={styles.topicText}>Check in and out on the app</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topicItem}>
          <Text style={styles.topicText}>Extra permissions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topicItem}>
          <Text style={styles.topicText}>Resend the Welcome email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topicItem}>
          <Text style={styles.topicText}>Long term planner guide</Text>
        </TouchableOpacity>
      </View>

      {/* Powered by Intercom (Dummy Text) */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Arolink</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  helpSection: {
    marginBottom: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  chatSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  chatText: {
    fontSize: 16,
    color: '#007AFF',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: '#333',
  },
  helpTopics: {
    marginBottom: 20,
  },
  topicItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  topicText: {
    fontSize: 16,
    color: '#007AFF',
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ContactSupportComponent;
