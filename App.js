import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import ImageViewer from './components/ImageViewer'; 
import Button from './components/Button.js';

import * as ImagePicker  from 'expo-image-picker';

const PlaceholderImage = require('./assets/images/uploadapp.jpg');
// dri
// deive

export default function App() {

   const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
    });
    if(!result.canceled){
     setSelectedImage(result.assets[0].uri);
    }else{
      alert('You did not choose any image');
    }
  }
 
  // for dei
  
// for drive upload 
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>   

      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a Photo" onPress={pickImageAsync}/>  
     
        <Button theme="secondary" label="Upload Photo"/>

        </View>   

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1/3,
    alignItems:'center',
  },
});

