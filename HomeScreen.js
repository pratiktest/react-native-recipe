import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  Navigator,
  TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import data from "./sales.json"
const relaxImage = require("./assets/relax.jpeg")

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    //ListView.DataSource performs performance processing for ListView
    var ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    })  

    this.state={
      dataSource:ds.cloneWithRows(data)
    }
  }

  getIcon = (record) => {
      switch (record.library){
        case "Ionicons":
            return <Ionicons name={record.icon} size={icon.size} color={record.color}/>
        case "FontAwesome":
            return <FontAwesome name={record.icon} size={icon.size} color={record.color}/>
        case "MaterialCommunityIcons":
            return <MaterialCommunityIcons name={record.icon} size={icon.size} color={record.color}/>
      }
  }

  showRecipeScreen = () => {
     this.props.navigation.navigate('OptionScreen')
  }


  renderRow = (record) => {   
    return(
    <TouchableOpacity onPress={this.showRecipeScreen}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
           {this.getIcon(record)}
        </View>
        <View style={styles.info}>
          <Text style={styles.item}>{record.items}</Text>
          <Text style={styles.address}>{record.address}</Text>
        </View>
      </View>
    </TouchableOpacity>

    )

  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Recipe for?</Text>
        <ListView
          dataSource={this.state.dataSource}
          //JSX for each row
          renderRow={this.renderRow}
        >

        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding:10,
    paddingTop:40,
    color:"#fff",
    backgroundColor: '#0f1b29',
    textAlign: 'center',
  },
  row: {
    borderColor:"#f1f1f1",
    borderBottomWidth:1,
    flexDirection:"row",
    marginLeft:10,
    marginRight:10,
    paddingTop:20,
    paddingBottom:20
  },
  iconContainer:{
    alignItems:"center",
    borderRadius:25,
    justifyContent:"center",
    height:50,
    width:50
  },
  info:{
    flex:1,
    paddingLeft:25,
    paddingRight:25
  },
  item:{
    fontWeight:"bold",
    fontSize:16,
    marginBottom:5
  },
  address:{
    fontSize:14
  },
  total:{
    width:80
  },
  date:{
    fontSize:12,
    marginBottom:5
  },
  price:{
    color:"#1cad61",
    fontSize:25,
    fontWeight:"bold"
  }
});

 var icon = {
   size:40,
   color:"#4F8EF7"
  }
