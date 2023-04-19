import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Activities from "../screens/Activities";
import Planning from "../screens/Planning";
import Studies from "../screens/Studies";
import Sports from '../screens/Sports';
import Timer from "../screens/Timer";
import Done from "../screens/Done";
import Delete from "../screens/Delete";
import AddActivity from "../screens/AddActivity";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false
      }}
    >
     <Stack.Screen name="Dashboard" component={TabNavigator} />
     <Stack.Screen name= "Activity" component={Activities} />
     <Stack.Screen name= "Plan" component={Planning} />
     <Stack.Screen name= "Study" component={Studies} />
     <Stack.Screen name= "Sport" component={Sports} />
     <Stack.Screen name= "Timer" component={Timer} />
     <Stack.Screen name= "DoneActivity" component={Done} />
     <Stack.Screen name= "DeleteActivity" component={Delete} />
     <Stack.Screen name= "AddActivity" component={AddActivity} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
