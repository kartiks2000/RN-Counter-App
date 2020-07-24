import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Counter from './components/counter';

export default function App() {
  return (
    <View>
      <Counter></Counter>
    </View>
  );
}


