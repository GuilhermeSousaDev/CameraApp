import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import CameraComponent from './components/Camera';
import PickingImage from './components/ImagePicker';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CameraComponent />
        <PickingImage />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
