import { StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Redux
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import Home from './src/Home';
import Details from './src/Details';

// Navigators :
const AuthStack = createStackNavigator();

export default function App() {
  return (
    
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
            <AuthStack.Navigator headerMode="none" initialRouteName="Home">

              {/* HOME */}
              <AuthStack.Screen name="Home" component={Home} /> 
              <AuthStack.Screen name="Details" component={Details} /> 
              
            </AuthStack.Navigator>
        </NavigationContainer>
    </PersistGate>
  </Provider>
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
