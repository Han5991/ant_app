export const APIKEY = `AIzaSyDNM8kPBFUkXeLk7O_nvols98KYOQpoxHM`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;
import AsyncStorage from '@react-native-async-storage/async-storage';

const setTokens = async (values, callBack) => {
  const firstPair = ['@ant_app@userId', values.userId];
  const secondPair = ['@ant_app@token', values.token];
  const thirdPair = ['@ant_app@refToken', values.refToken];
  try {
    await AsyncStorage.multiSet([firstPair, secondPair, thirdPair]).then(
      response => {
        callBack();
      },
    );
  } catch (e) {
    //save error
  }
};

const getTokens = async callBack => {
  let values;

  try {
    values = await AsyncStorage.multiGet([
      '@ant_app@userId',
      '@ant_app@token',
      '@ant_app@refToken',
    ]).then(values => {
      callBack(values);
    });
  } catch (e) {
    // read error
  }
};

const removeTokens = async callBack => {
  try {
    await AsyncStorage.multiRemove([
      '@ant_app@userId',
      '@ant_app@token',
      '@ant_app@refToken',
    ]).then(() => {
      callBack();
    });
  } catch (e) {}
};

export {getTokens, setTokens, removeTokens}