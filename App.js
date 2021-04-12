import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WordsListScreen from './Screen/index'
export default function App() {
  return (
    <View style={styles.container}>
      <WordsListScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 50,
    marginHorizontal: 35,
    fontFamily: 'Segoe UI'
  },
});
