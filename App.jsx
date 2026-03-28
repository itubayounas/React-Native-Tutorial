import React from 'react';
import 'react-native-gesture-handler'; // MUST BE THE VERY FIRST LINE
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './src/navigation-screen/Home';
import About from './src/navigation-screen/About';
import Login from './src/navigation-screen/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// --- 1. Define the Drawer Group ---
// This contains all the screens that should have the side menu
// const DrawerGroup = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: 'lightblue' },
//         headerTitleAlign: 'center',
//       }}
//     >
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="About" component={About} />
      
//     </Drawer.Navigator>
//   );
// };

// --- 2. Main App Component ---
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Login') {
              iconName = focused ? 'log-in' : 'log-in-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
        
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen 
    //       name="MainApp" 
    //       component={DrawerGroup} 
    //       options={{ headerShown: false }} // Hide Stack header to show Drawer header
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;