import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({ key, value, callBack }) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved');
    callBack && callBack();
  } catch (e) {
    console.log('error saving data');
  }
};

export const storeObjectData = async ({ key, value, callBack }) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Data saved');
    callBack && callBack();
  } catch (e) {
    console.log('error saving data');
  }
};

export const getObjectData = async ({ key, callBack }) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Failed to get the data from storage');
  }
};

export const getData = async ({ key }) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Value gotten!');
      return value;
    }
  } catch (e) {
    console.log('Failed to get the data from storage');
  }
};

export const removeValue = async ({ value }) => {
  try {
    await AsyncStorage.removeItem(value);
  } catch (e) {
    console.log('error removing item');
  }

  console.log('item removed.');
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Storage successfully cleared!');
  } catch (e) {
    console.log('Failed to clear the async storage.');
  }
};
