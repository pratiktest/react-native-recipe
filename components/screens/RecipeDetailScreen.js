import React from "react"
import TabBarContainer from "../tabs/TabBarContainer"
import { Image, View as ReactNativeView } from 'react-native';
import { Container, Header, Button,  View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left,Right, Body, Icon, Content } from 'native-base';



const recipe = {
    text: 'Tom Yum Soup',
    name: 'One',
    time: 10,
    vitamin: "A",
    nutrition:"reduce cholestrol",
    description:"",
    nutrition:"",
    image: require('../../assets/tom-yum-soup.jpg'),
  }


export default class RecipeDetailScreen extends React.Component {

    

    render() {

        const { params } = this.props.navigation.state;

        return (
    <ReactNativeView style={{flex:1}}>
       <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={recipe.image} />
                <Body>
                  <Text>TomYum Soup</Text>
                  <Text note>Quality:  Vitamin Protein</Text>
                  <Text note>Effective on: Weakness, Headache, Fever, Nausea</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                <Text>
              Recipe
              
               </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Like</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </ReactNativeView>
        )
    }
}