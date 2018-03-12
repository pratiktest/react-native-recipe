import HomeScreen from './HomeScreen'
import { StackNavigator } from 'react-navigation'
import React from 'react'
import OptionScreen from "./OptionScreen"
import RecipeSwiper from "./RecipeSwiper"

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    OptionScreen:{
      screen:OptionScreen
    },
    RecipeSwiper:{
      screen:RecipeSwiper
    }

  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}