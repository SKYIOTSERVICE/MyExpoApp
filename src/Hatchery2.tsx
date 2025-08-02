import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Hatchery2 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hatchery2 Device Details</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 }
});

export default Hatchery2;
