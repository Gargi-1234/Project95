import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Activities from "../screens/Activities";
import Planning from "../screens/Planning";
import Studies from "../screens/Studies";
import Sports from '../screens/Sports';
import Home from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused 
                ? 'home'
                : 'home-outline';
            } 
             else if (route.name === 'Activities') {
              iconName = focused
                ? 'documents'
                : 'documents-outline';
            } else if (route.name === 'Planning') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Studies') {
              iconName = focused 
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'Sports') {
              iconName = focused 
                ? 'ios-football'
                : 'ios-football-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        inactiveColor="#F0946E"
        activeColor="#22423D"
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name="Activities" component={Activities} options={{headerShown:false}}/>
        <Tab.Screen name="Planning" component={Planning} options={{headerShown:false}}/>
        <Tab.Screen name="Studies" component={Studies} options={{headerShown:false}}/>
        <Tab.Screen name="Sports" component={Sports} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
}

export default BottomTabNavigator