import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from './src/navigation-screen/Home';
import About from './src/navigation-screen/About';
import Login from './src/navigation-screen/Login';
// import { Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// const headertitle = () => {
//   return <Button title='one' color='red'/>;
// };

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightblue', 
          },
          headerTintColor: 'black', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center', 
        }}
      >
        <Stack.Screen name="Login" component={Login}
        //  options={{
        //   title: " ",
        //   headerTitle:headertitle
        // }} 
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;