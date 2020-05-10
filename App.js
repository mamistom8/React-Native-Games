import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import GameScreen from './src/GameScreen';
import HomeScreen from './src/HomeScreen';
import ExpScreeen from './src/ExpScreen';
import TapGame from './src/TapGame';
import TapGameInfo from './src/TapGameInfo';


const navigator = createStackNavigator(
  {
     Game:GameScreen,
     Home:HomeScreen,
     Timer: ExpScreeen,
     TGame:TapGame,
     Tapinfo : TapGameInfo
  
  }, {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      title: 'MYGame'
    }
  
  });
  
  export default createAppContainer(navigator);