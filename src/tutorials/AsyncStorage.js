import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageTutorial = () => {
  const storeData = async (key, value) => {
    try {
      // add JSON.stringify to save Object
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // saving error
      console.log('Save data error');
    }
  };

  const removeData = async key => {
    try {
      // add JSON.stringify to save Object
      await AsyncStorage.removeItem(key);
    } catch (error) {
      // remove error
      console.log('remove data error');
    }
  };

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return value;
      } else {
        console.log('read data error');
      }
    } catch (error) {
      // error reading value
      console.log('read data error');
    }
  };

  const saveStorage = () => {
    storeData('LOGIN', {username: 'Michael', password: 1234});
  };

  const readStorage = () => {
    // add JSON.parse to get Object

    getData('LOGIN').then(result => {
      let jsonObject = JSON.parse(result);
      alert(
        'username: ' +
          jsonObject.username +
          ' password: ' +
          jsonObject.password,
      );
    });
  };

  const removeStorage = () => {
    removeData('LOGIN');
  };

  return (
    <View style={styles.container}>
      <Button title="Save String" onPress={saveStorage} />
      <Button title="Read String" onPress={readStorage} />
      <Button title="Remove String" onPress={removeStorage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AsyncStorageTutorial;
