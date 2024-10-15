import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';  // Import AuthContext
import users from '../data/dummyData';  // Import dummy data
import logo from '../assets/images/arolink_logo.png';  // Import the logo image

const LoginScreen = ({ navigation }) => {
    const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);  // State to track if we are verifying 2FA
  const [currentUser, setCurrentUser] = useState(null);  // Store the current user after successful email/password login

  // Handle login check
  const handleLogin = () => {
    // Check if email exists in the dummy data
    const user = users.find(user => user.email === email);
    if (!user) {
      // If email is not found, show email error
      Alert.alert('Login Failed', 'Email is incorrect');
      return;
    }

    // Check if the password matches
    if (user.password !== password) {
      // If password doesn't match, show password error
      Alert.alert('Login Failed', 'Password is incorrect');
      return;
    }

    // If both email and password are correct, move to 2FA step
    setCurrentUser(user);
    setIsVerifying(true);  // Move to 2FA
  };

  // Handle 2FA verification
  const handleVerification = () => {
    if (verificationCode === '123456') {
      // Successful login, navigate to Home
      login(currentUser);
      navigation.replace('Main');
    } else {
      console.log('verification code is', verificationCode);
      console.log('verification code should be', currentUser.twoFactorCode);
      Alert.alert('Verification Failed', 'Invalid verification code');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Logo at the top */}
        <Image source={logo} style={styles.logo} />

        {!isVerifying ? (
          <>
            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#01579b"
              value={email}
              onChangeText={setEmail}
            />
            
            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#01579b"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            
            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* Verification Code Input */}
            <TextInput
              style={styles.input}
              placeholder="Enter Verification Code"
              placeholderTextColor="#01579b"
              value={verificationCode}
              onChangeText={setVerificationCode}
              keyboardType="numeric"
            />
            
            {/* Submit Verification Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleVerification}>
              <Text style={styles.loginButtonText}>Submit Code</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    logo: {
      width: 250,  // Updated width for a bigger logo
      height: 80,  // Updated height for a bigger logo
      marginBottom: 40,  // Space between the logo and input fields
      resizeMode: 'contain',
    },
    input: {
      width: '80%',
      padding: 15,
      marginVertical: 10,
      backgroundColor: '#e6e6e6',
      borderColor: '#01579b',
      borderWidth: 1,
      borderRadius: 10,
      color: '#01579b',
    },
    loginButton: {
      width: '80%',
      padding: 15,
      backgroundColor: '#01579b',
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 30,
    },
    loginButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default LoginScreen;
