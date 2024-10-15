import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dummy data for languages
const languages = [
  'Danish',
  'Dutch',
  'English',
  'Estonian',
  'French',
  'German',
  'Lithuanian (Lithuania)',
  'Norwegian Bokmål',
  'Spanish',
  'Swedish',
];

const ChangeLanguageComponent = () => {
  const navigation = useNavigation();

  // Handle language selection (You can expand this to actually change the app's language)
  const handleLanguageSelection = (language) => {
    console.log(`Language selected: ${language}`);
    navigation.goBack();  // Go back to the previous screen after selecting a language
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the language that you want to use the app</Text>
      <FlatList
        data={languages}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleLanguageSelection(item)} style={styles.languageItem}>
            <Text style={styles.languageText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  languageText: {
    fontSize: 16,
  },
});

export default ChangeLanguageComponent;
