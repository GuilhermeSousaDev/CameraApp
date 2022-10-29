import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function CameraComponent() {
  const [type, setType] = useState(CameraType.back);
  const [findFace, setFindFace] = useState(false);
  const [zoom, setZoom] = useState(0);
  const [permission, requestPermision] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermision();
  }, []);

  const toggleCameraType = useCallback(() => {
    setType(prevState => prevState === CameraType.back ? CameraType.front : CameraType.back);
  }, []);

  const changeCameraZoom = useCallback((type: string) => {
    if (type === '+') {
      setZoom(current => current + 0.5 >= 1? 1 : current + 0.5);
    } else {
      setZoom(current => current - 0.5 <= 0 ? 0 : current - 0.5);
    }
  }, [zoom]);

  return (
    <View style={styles.container}>
      <Text>Camera App</Text>

      { permission?.granted ? (
        <View>
          { findFace? 
            <Camera style={styles.camera} type={type} onFacesDetected={faces => console.log(faces)} /> : <Camera style={styles.camera} type={type} zoom={zoom} /> 
          }

        <View>
          <Button 
            title='Flip Camera' 
            onPress={toggleCameraType} 
          />

          <Button title='Find Face' onPress={() => setFindFace(findFace === true ? false : true)} />

            <Button title='+' onPress={_ => changeCameraZoom('+')} />
            <Button title='-' onPress={_ => changeCameraZoom('-')} />
          </View>
        </View>
      ) : '' }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 400,
    height: 500,
    borderRadius: 15
  },
});
