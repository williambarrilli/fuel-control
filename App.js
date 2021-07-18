import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home/index';
import AddFuel from './src/pages/AddFuel/index';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='addFuel' component={AddFuel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
