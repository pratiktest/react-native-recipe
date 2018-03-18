import React, { Component} from 'react';
import { Image, TouchableOpacity, Button, View as ReactNativeView, Text as ReactNativeText, StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import NavigationService from "../navigation/NavigationService"
const cards = [
  {
    id:1,
    text: 'Tom Yum Soup',
    name: 'One',
    time: 10,
    vitamin: "A",
    nutrition:"reduce cholestrol",
    image: require('../../assets/relax.jpeg'),
  },
  {
    id:2,
    text: 'Tomato Soup',
    name: 'Two',
    time: 10,
    vitamin: "A",
    image: require('../../assets/relax.jpeg'),
  },
  {
    id:3,
    text: 'SweetCorn Soup',
    name: 'Three',
    time: 10,
    vitamin: "A",
    image: require('../../assets/relax.jpeg'),
  },
  {
    id:4,
    text: 'Soup of the day',
    name: 'Four',
    time: 10,
    vitamin: "A",
    image: require('../../assets/relax.jpeg'),
  },
];



export default class RecipeSwiper extends Component {

swipeRight = () => {
  console.log("hi")
}

showDetails = (id) => (e) => {
  NavigationService.navigate("RecipeDetailScreen", {id})
}


  render() {
    return (
    <ReactNativeView style={{flex:1}}>
        <Container>
          <View>
            <DeckSwiper
              ref={(c) => this._deckSwiper = c}
              dataSource={cards}
              renderEmpty={() =>
                <View style={{ alignSelf: "center" }}>
                  <Text>Over</Text>
                </View>
              }
              renderItem={item =>
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={item.image} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text note>Authentic Thai Soup Rich in Vitamins</Text>
                      </Body>
                    </Left>
                  </CardItem>
                   <CardItem>
                    <Button
                      onPress={this.showDetails(item.id)}
                      title="View Recipe"
                      color="#841584"
                      accessibilityLabel="Learn more about this Recipe"
                    />
                  </CardItem>
                  <CardItem cardBody>

                  </CardItem>
                  <CardItem>
                    <Icon name="ios-nutrition" style={styles.icon} />
                    <Text>{"vitamin " + item.vitamin} </Text>
                  </CardItem>

                  <CardItem>
                    <Icon name="ios-stopwatch-outline" style={styles.icon} />
                    <Text>{item.time + " minutes"} </Text>
                  </CardItem>
                </Card>
              }

              onSwipeRight = {this.swipeRight}
              onSwipeLeft = {this.swipeLeft}
            />
          </View>
        </Container>
      </ReactNativeView>
    );
  }
}

styles = StyleSheet.create({

  icon: {
    color:'#ED4A6A',
    paddingLeft:10
  }

})