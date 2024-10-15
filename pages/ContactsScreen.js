import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import dummyContactsData from '../data/dummyContactsData';  // Import the dummy data

const ContactScreen = () => {
  const [searchText, setSearchText] = useState('');

  const filteredContacts = dummyContactsData.filter(contact => 
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCall = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactRole}>{item.role}</Text>
      </View>
      <View style={styles.contactActions}>
        {/* Phone icon to call */}
        <TouchableOpacity onPress={() => handleCall(item.phone)}>
          <Ionicons name="call-outline" size={24} color="#01579b" />
        </TouchableOpacity>
        {/* Email icon to send email */}
        <TouchableOpacity onPress={() => handleEmail(item.email)} style={styles.iconSpacing}>
          <Ionicons name="mail-outline" size={24} color="#01579b" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search department and colleagues..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  searchBar: {
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactRole: {
    fontSize: 14,
    color: 'gray',
  },
  contactActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 15,
  },
});

export default ContactScreen;
