import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  Splash,
  MainPage,
  ChoicePage,
  Letters,
  Vowels,
  Consonants,
  Barakhari,
  Numbers,
  Words,
  Animals,
  Body,
  Colors,
  Family
} from './app/components';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
    MainPage: {
      screen: MainPage
    },
    ChoicePage: {
      screen: ChoicePage
    },
    Letters: {
      screen: Letters
    },
    Vowels: {
      screen: Vowels
    },
    Consonants: {
      screen: Consonants,
    },
    Barakhari: {
      screen: Barakhari,
    },
    Numbers: {
      screen: Numbers
    },
    Words: {
      screen: Words
    },
    Animals: {
      screen: Animals
    },
    Body: {
      screen: Body
    },
    Colors: {
      screen: Colors
    },
    Family: {
      screen: Family
    }
  },
  {
    initialRouteName: 'Barakhari',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
