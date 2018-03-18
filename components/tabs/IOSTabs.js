import React from "react"

import { TabBarIOS, View, Text} from "react-native"

import HomeScreen from "./HomeScreen"


export default class IOSTabs extends React.Component {

    state = {
        selected:"home"
    }

    selectTab = (id) => {
        this.setState({
            selected:id
        })
    }

    renderTab = (options) => {
        return <TabBarIOS.Item
                title={options.title}
                selected={this.state.selected === options.id}
                onPress={() => this.selectTab(options.id)}
                systemIcon={options.icon}
                >

                <HomeScreen navigation={this.props.navigation}/>

            </TabBarIOS.Item>

    }

    render(){
        return (
            <TabBarIOS
             tintColor="#42b49a"
             >
             {this.renderTab({title:"Recipe", id:"home", icon:"most-viewed"})}
             {this.renderTab({title:"Favourites", id:"favourites", icon:"favorites"})}
             {this.renderTab({title:"Settings", id:"settings", icon:"more"})}

             </TabBarIOS>
        )
    }


}