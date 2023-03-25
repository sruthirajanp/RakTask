import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { savelogin } from '../Providers/actions/loginactions';
import { SAVE_LOGIN_PROFILE } from '../serviceActions';
export default function StorageProvider({ children }) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  useLayoutEffect(() => {
    getStoredData({ key: 'root', type: savelogin.SAVELOGIN });
  }, [null]);
  const getStoredData = async ({ key, type }) => {
    /* get stored data from local storage */
    AsyncStorage.getItem(key).then(e => {
      if (e) {
        dispatch({ type, data: JSON.parse(e) });
      }

    });
  };
  const storeData = async ({ key, whitelist = [], data = {} }) => {
    /* store only data that only present in white list */
    const newdata = whitelist.reduce((p, c) => {
      p[c] = data[c];
      return p;
    }, {});
    /* setting string items to local storage with specific key */
    await AsyncStorage.setItem(key, JSON.stringify(newdata)).catch(e => { });
  };


  useEffect(() => {
    /**
     * save details
     * @whitelist =>['value1','value2'] only this variable's values are saved on l
     * * @whitelist =>['value1','value2'] only this variable's values are saved on local storage
     *  */
    storeData({
      key: 'root',
      data: state.Loginreducers,
      whitelist: ['isLoggedIn', 'userDetails', 'currentTime'],
    });
  }, [state.Loginreducers]);
  return <View style={{ flex: 1 }}>{children}</View>;
}