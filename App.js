import HomeScreen from './components/screens/HomeScreen'
import {View} from "react-native"
import TabBarContainer from "./components/tabs/TabBarContainer"
import { StackNavigator } from 'react-navigation'
import TabScreen from './components/screens/TabScreen'
import React from 'react'
import OptionScreen from "./components/screens/OptionScreen"
import RecipeSwiper from "./components/screens/RecipeSwiper"
import NavigationService from './components/navigation/NavigationService';
import RecipeDetailScreen from "./components/screens/RecipeDetailScreen"


const TopLevelNavigator = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    OptionScreen:{
      screen:OptionScreen
    },
    RecipeSwiper:{
      screen:RecipeSwiper
    },
    RecipeDetailScreen:{
      screen:RecipeDetailScreen
    }

  },
  {
    initialRouteName: 'HomeScreen',
  }
);


export default class App extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        <TopLevelNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        <TabBarContainer/>
      </View>
    );
  }
}