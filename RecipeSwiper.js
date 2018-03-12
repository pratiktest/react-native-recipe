import React, { Component} from 'react';
import { Image, TouchableOpacity, Button } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Tom Yum Soup',
    name: 'One',
    image: require('./assets/relax.jpeg'),
  },
  {
    text: 'Tomato Soup',
    name: 'Two',
    image: require('./assets/relax.jpeg'),
  },
  {
    text: 'SweetCorn Soup',
    name: 'Three',
    image: require('./assets/relax.jpeg'),
  },
  {
    text: 'Soup of the day',
    name: 'Four',
    image: require('./assets/relax.jpeg'),
  },
];



export default class RecipeSwiper extends Component {

swipeRight = () => {
  console.log("hi")
}

showDetails = () => {
  console.log("details")
}


  render() {
    return (

        <Container>
          <Header />
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
                      onPress={this.showDetails}
                      title="View Recipe"
                      color="#841584"
                      accessibilityLabel="Learn more about this Recipe"
                    />
                  </CardItem>
                  <CardItem cardBody>

                  </CardItem>
                  <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.name}</Text>

                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.name}</Text>
                  </CardItem>

                  <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.name}</Text>

                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.name}</Text>
                  </CardItem>
                </Card>
              }

              onSwipeRight = {this.swipeRight}
              onSwipeLeft = {this.swipeLeft}
            />
          </View>
        </Container>
    );
  }
}