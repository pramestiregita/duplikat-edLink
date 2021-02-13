import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import Verification from './Verification';
import Home from './Home';
import Class from './Class';
import Message from './Message';
import Explore from './Explore';
import Others from './Others';

import colors from '../assets/color';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="LandingPage"
        component={LandingPage}
      />
      <Stack.Screen
        options={{headerTitle: ''}}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{headerTitle: ''}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#ffffff',
        inactiveTintColor: '#bfbfbf',
        tabStyle: {backgroundColor: colors.buttonColor},
        style: {height: 60},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="users" size={size} color={color} />
          ),
        }}
        name="Class"
        component={Class}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="comments" size={size} color={color} />
          ),
        }}
        name="Message"
        component={Message}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="compass" size={size} color={color} />
          ),
        }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="user-alt" size={size} color={color} />
          ),
        }}
        name="Others"
        component={Others}
      />
    </Tab.Navigator>
  );
};

export default function Main() {
  const isLogin = true;

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="AuthStack"
            component={AuthStack}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name={'Verification'}
            component={Verification}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'BottomTab'}
            component={BottomTab}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
