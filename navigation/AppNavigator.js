import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';  // Import stack navigator
import HomeScreen from '../pages/HomeScreen';
import CalendarScreen from '../pages/CalendarScreen';
import DepartmentScreen from '../pages/DepartmentScreen';
import ContactsScreen from '../pages/ContactsScreen';
import MoreScreen from '../pages/MoreScreen';
import NotificationComponent from '../components/NotificationComponent';
import LoginScreen from '../pages/LoginScreen';  // Import LoginScreen
import Ionicons from 'react-native-vector-icons/Ionicons';

// Create the tab navigator
const Tab = createBottomTabNavigator();

// Create the stack navigator
const Stack = createStackNavigator();

// Define the bottom tab navigation
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Department') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#01579b',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Department" component={DepartmentScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

// Define the main stack navigator that includes both the login screen and the tab navigation
function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* Add the LoginScreen to the stack */}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      
      {/* Main tab screens (once user is logged in) */}
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      {/* Add NotificationComponent to the stack */}
      <Stack.Screen name="Notifications" component={NotificationComponent} options={{ title: 'Notifications' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
