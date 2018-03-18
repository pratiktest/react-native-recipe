import React from "react"
import Tabs from "react-native-tabs"
import {Text, StyleSheet} from "react-native"
import TabBarItem from "./TabBarItem"
import { NavigationActions } from 'react-navigation'
import NavigationService from '../navigation/NavigationService'


export default class TabBarContainer extends React.Component {


    setTab = (comp) => {
        NavigationService.reset("HomeScreen")
    }

    render() {
        return (
             <Tabs onSelect={this.setTab} iconStyle={{height:72}} style={styles.tabContainer}>
                <TabBarItem name="home" label="Home" icon="server"/>
                <TabBarItem name="favourites" label="Favourites" icon="database"/>
                <TabBarItem name="settings" label="Settings" icon="envelope-o"/>
            </Tabs>
        )
    }
}

const styles = StyleSheet.create({
    tabContainer:{
        backgroundColor:"#343434",
        borderTopWidth:1,
        borderTopColor:"#262626",
        height:96
    }
})