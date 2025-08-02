import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = { navigation: HomeScreenNavigationProp };

const devices = ['Canteen', 'Office', 'Mill', 'Bathroom', 'Boiler', 'Hatchery1','Hatchery2','Villa'];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {devices.map((device) => (
        <TouchableOpacity key={device} style={styles.button} onPress={() => navigation.navigate(device as keyof RootStackParamList)}>
          <Text style={styles.buttonText}>{device}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: '#3498db', paddingVertical: 20, paddingHorizontal: 40, marginVertical: 10, borderRadius: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default HomeScreen;
