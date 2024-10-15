import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Modal, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsComponent = () => {
  // State for toggling notifications
  const [timeNotifications, setTimeNotifications] = useState(true);
  const [otherNotifications, setOtherNotifications] = useState(true);

  // State for theme selection
  const [theme, setTheme] = useState('Light');
  const [isThemeModalVisible, setThemeModalVisible] = useState(false);

  // State for language selection
  const [language, setLanguage] = useState('English');
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

  // List of available languages (dummy data)
  const languages = ['English', 'Spanish', 'French', 'German', 'Danish'];

  // Handle toggle switches
  const toggleTimeNotifications = () => setTimeNotifications(!timeNotifications);
  const toggleOtherNotifications = () => setOtherNotifications(!otherNotifications);

  // Handle theme selection
  const selectTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    setThemeModalVisible(false); // Close modal after selecting
  };

  // Handle language selection
  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setLanguageModalVisible(false); // Close modal after selecting
  };

  return (
    <View style={styles.container}>
      {/* Time Registrations Notifications */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Time registrations notifications</Text>
        <Switch
          value={timeNotifications}
          onValueChange={toggleTimeNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={timeNotifications ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      {/* Other Notifications */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Other notifications</Text>
        <Switch
          value={otherNotifications}
          onValueChange={toggleOtherNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={otherNotifications ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      {/* Theme Selector */}
      <TouchableOpacity style={styles.settingItem} onPress={() => setThemeModalVisible(true)}>
        <Text style={styles.settingText}>Theme: {theme}</Text>
        <Ionicons name="chevron-forward-outline" size={24} />
      </TouchableOpacity>

      {/* Language Selector */}
      <TouchableOpacity style={styles.settingItem} onPress={() => setLanguageModalVisible(true)}>
        <Text style={styles.settingText}>Language: {language}</Text>
        <Ionicons name="chevron-forward-outline" size={24} />
      </TouchableOpacity>

      {/* Theme Modal */}
      <Modal visible={isThemeModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Theme</Text>
            <TouchableOpacity style={styles.modalOption} onPress={() => selectTheme('Light')}>
              <Text style={styles.modalOptionText}>Light</Text>
              {theme === 'Light' && <Ionicons name="checkmark-circle-outline" size={24} color="#81b0ff" />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => selectTheme('Dark')}>
              <Text style={styles.modalOptionText}>Dark</Text>
              {theme === 'Dark' && <Ionicons name="checkmark-circle-outline" size={24} color="#81b0ff" />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalClose} onPress={() => setThemeModalVisible(false)}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Language Modal */}
      <Modal visible={isLanguageModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <FlatList
              data={languages}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalOption} onPress={() => selectLanguage(item)}>
                  <Text style={styles.modalOptionText}>{item}</Text>
                  {language === item && <Ionicons name="checkmark-circle-outline" size={24} color="#81b0ff" />}
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.modalClose} onPress={() => setLanguageModalVisible(false)}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
  },
  modalClose: {
    marginTop: 10,
    alignItems: 'center',
  },
  modalCloseText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default SettingsComponent;
