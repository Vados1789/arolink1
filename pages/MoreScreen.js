import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';  // Import Auth Context
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';  // For navigation

const MoreScreen = () => {
  const { user, logout } = useContext(AuthContext);  // Access logout from context
  const navigation = useNavigation();

  useEffect(() => {
    if (!user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  }, [user]);

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Log Out", onPress: () => {
            logout();  // Clear user session
            navigation.replace('Login');  // Go back to the login screen
        }, style: "destructive" }
      ]
    );
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Redirecting to login...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Display user's profile picture, name, and role */}
      <View style={styles.profileContainer}>
        <Image 
          source={require('../assets/images/Arolink1.png')}  // Replace with the actual profile image URI
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userRole}>{user.role}</Text>
      </View>

      {/* Menu items */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name="notifications-outline" size={24} />
        <Text style={styles.menuText}>Notifications</Text>
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ContactSupport')}>
        <Ionicons name="help-circle-outline" size={24} />
        <Text style={styles.menuText}>Contact support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ReportBug')}>
        <Ionicons name="bug-outline" size={24} />
        <Text style={styles.menuText}>Report a bug</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ChangeLanguage')}>
        <Ionicons name="globe-outline" size={24} />
        <Text style={styles.menuText}>Change language</Text>
      </TouchableOpacity>

      {/* Log Out option */}
      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} />
        <Text style={styles.menuText}>Log Out</Text>
      </TouchableOpacity>

      {/* App version */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>App version 12.9.11 (24.10.03.1246)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  profileContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userRole: {
    fontSize: 16,
    color: 'gray',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  notificationBadge: {
    backgroundColor: '#d9534f',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 'auto',
  },
  notificationText: {
    color: 'white',
    fontWeight: 'bold',
  },
  versionContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 20,
  },
  versionText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MoreScreen;
