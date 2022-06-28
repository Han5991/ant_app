import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

import DiaryDocu from './components/diary/diaryDocu';
import Logo from './utils/logo';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Loading from './components/auth/loading';

const MainScreenTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const DiaryStack = createStackNavigator();
const NewsStack = createStackNavigator();

const headerConfig = {
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7487C5',
  },
  headerTitle: <Logo />,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
  },
};

const DiaryStackComponent = () => {
  return (
    <DiaryStack.Navigator>
      <DiaryStack.Screen
        name="Diary"
        component={Diary}
        options={{...headerConfig, headerLeft: null}}
      />
      <DiaryStack.Screen
        name="DiaryDocu"
        component={DiaryDocu}
        options={headerConfig}
      />
    </DiaryStack.Navigator>
  );
};

const NewsStackComponent = () => {
  return (
    <DiaryStack.Navigator>
      <DiaryStack.Screen
        name="News"
        component={News}
        options={{...headerConfig, headerLeft: null}}
      />
    </DiaryStack.Navigator>
  );
};

const AppTapCompoment = () => {
  return (
    <MainScreenTab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeBackgroundColor: '#788DCF',
        inactiveBackgroundColor: '#7487C5',
        style: {
          backgroundColor: '#7487C5',
        },
      }}
      initialRouteName="Diary"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}>
      <MainScreenTab.Screen name="Diary" component={DiaryStackComponent} />
      <MainScreenTab.Screen name="News" component={NewsStackComponent} />
    </MainScreenTab.Navigator>
  );
};

const TabBarIcon = (focused, name) => {
  let iconName;
  let iconSize = focused ? 37 : 32;

  if (name === 'Diary') {
    iconName = 'notebook-outline';
  }

  if (name === 'News') {
    iconName = 'newspaper-variant-outline';
  }

  return <Icon name={iconName} size={iconSize} color="#fff" />;
};

export const RootNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Loading" component={Loading} />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={() => ({
          gestureEnabled: false,
        })}
      />
      <AuthStack.Screen
        name="AppTapCompoment"
        component={AppTapCompoment}
        options={() => ({
          gestureEnabled: false,
        })}
      />
    </AuthStack.Navigator>
  );
};
