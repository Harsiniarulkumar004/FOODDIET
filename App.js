import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import MealPlanScreen from './src/screens/MealPlanScreen';
import EducationScreen from './src/screens/EducationScreen';
import ProfileScreen from './src/screens/ProfileScreen';


const Stack = createStackNavigator();


export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Scan" component={ScanScreen} />
<Stack.Screen name="MealPlan" component={MealPlanScreen} />
<Stack.Screen name="Education" component={EducationScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
