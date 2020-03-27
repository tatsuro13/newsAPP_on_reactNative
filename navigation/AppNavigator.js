import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { FontAwesome } from '@expo/vector-icons';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIOS } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  )
}
const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={ClipScreen} />
    </Stack.Navigator>
  )
}

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Clip':
        iconName = 'bookmark';
        break;
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Clip" component={ClipStack} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}