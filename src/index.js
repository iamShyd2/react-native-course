import React from 'react';
import { 
  NavigationContainer,
  DarkTheme,
  
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './views/LandingPage';
import Home from './views/Home';

const Stack = createNativeStackNavigator();


const Routes = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const App = () => {

  return(
    <Routes />
  );

};

export default App;
