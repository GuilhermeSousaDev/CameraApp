import React, { useCallback, useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PickingImage() {
    const [uri, setUri] = useState({ localUri: '' });

    const openImagePickerAsync = useCallback(async () => {
        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        
        if (pickerResult.cancelled === true) return;

        setUri({ localUri: pickerResult.uri });
    }, []);

    return (
        <View>
            <Button 
                title="Pick a Photo"
                onPress={openImagePickerAsync}
            />

            { uri.localUri && 
                <Image style={styles.image} source={{ uri: uri.localUri }} /> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    }
});