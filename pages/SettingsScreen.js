import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [timeRegistrationEnabled, setTimeRegistrationEnabled] = useState(true);

  // Toggle functions for switches
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleTimeRegistration = () => setTimeRegistrationEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.setting}>
        <Text>Enable Notifications</Text>
        <Switch
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      <View style={styles.setting}>
        <Text>Enable Time Registrations</Text>
        <Switch
          onValueChange={toggleTimeRegistration}
          value={timeRegistrationEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});

export default SettingsScreen;
