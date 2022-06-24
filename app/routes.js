import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

import DiaryDocu from './components/diary/diaryDocu';
import Logo from './utils/logo'

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
  headerTitle: <Logo/>,
  headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
  }
}

const headerConfig_ = {
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerStyle: {
      backgroundColor: '#7487C5',
  },
  headerTitle: <Logo/>,
  headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
  },
  headerLeft: null,
}

const DiaryStackComponent = ()=>{
  return (
    <DiaryStack.Navigator>
      <DiaryStack.Screen name="Diary" component={Diary} options={headerConfig}/>
      <DiaryStack.Screen name="DiaryDocu" component={DiaryDocu} options={headerConfig}/>
    </DiaryStack.Navigator>
  )
}

const NewsStackComponent = () => {
  return (
      <DiaryStack.Navigator>
          <DiaryStack.Screen name="News" component={News} options={headerConfig_}/>
      </DiaryStack.Navigator>
  )
}

const isLoggedIn = false;

const AppTapCompoment = () => {
  return (
    <MainScreenTab.Navigator>
      <MainScreenTab.Screen name="Diary" component={DiaryStackComponent} />
      <MainScreenTab.Screen name="News" component={NewsStackComponent} />
    </MainScreenTab.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLoggedIn ? (
        <AuthStack.Screen name="Main" component={AppTapCompoment} />
      ) : (
        <>
          <AuthStack.Screen name="SignIn" component={SignIn} />
          <AuthStack.Screen name="AppTapCompoment" component={AppTapCompoment} />
        </>
      )}
    </AuthStack.Navigator>
  );
};
