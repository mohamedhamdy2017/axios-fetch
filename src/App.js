/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image
} from 'react-native';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import { StackNavigator} from 'react-navigation';

const App = StackNavigator({
    HomeScreen: { screen : HomeScreen},
    SearchScreen: {screen: SearchScreen}
})


export default App;