import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Login from './src/Components/Login';
import FirstPage from './src/Components/FirstPage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/Providers/store';
import HomeLabels from './src/Components/HomeLabels';
import { navigationRef } from './src/services/navigationservice';
import StorageProvider from './src/services/storageServices';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LiveChat() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <HomeLabels/> */}
    </View>
  );
}

function RAKToken() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function LocateUS() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Locate Us!</Text>
    </View>
  );
}


const BottomNav = () => {


  const result = useSelector(state=>state.Loginreducers)
    const {userDetails,isLoggedIn}= result
    console.log('adjhqgjqbdabvcnbvjh',userDetails,isLoggedIn)

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard:true
    }}>
      <Tab.Screen
        name="Products"
        component={isLoggedIn?RootStack:MyStack }
        options={{
          tabBarIcon: ({ }) => (
            <View>
              <Icon
                size={28}
                name="description"
                color="#a8a5a5"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Live Chat"
        component={LiveChat}
        options={{
          tabBarIcon: ({ }) => (
            <View>
              <Icon
                size={28}
                name={'chat'}
                color="#a8a5a5"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="RAK Token"
        component={RAKToken}
        options={{
          tabBarIcon: ({ }) => (
            <View>
              <Icon
                size={28}
                name={'vpn-key'}
                color="#a8a5a5"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Locate US"
        component={LocateUS}
        options={{
          tabBarIcon: ({ }) => (
            <View>
              <Icon
                size={28}
                name={'location-on'}
                color="#a8a5a5"
              />
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  )
}

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false,
    }}>
      <Stack.Screen
        name="Products"
        component={FirstPage}
        options={{headerShown:false}}
      />
      <Stack.Screen name="Login" component={Login}/>
      {/* <Stack.Screen name="HomeLabels" component={HomeLabels}/> */}
    </Stack.Navigator>
  )
}
const RootStack =() =>
{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false,}}>
      <Stack.Screen name="HomeLabels" component={HomeLabels}/>
    </Stack.Navigator>
    
  )
}

function App() {
  

  return (
    <Provider store={store}>
      <StorageProvider>
    <NavigationContainer ref={navigationRef}>
      
      <BottomNav />
    </NavigationContainer>
    </StorageProvider>
    </Provider>


  );
}

export default App;