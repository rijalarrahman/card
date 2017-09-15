import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Left,
  Body,
  Right,
  Item,
  Input,
  Submit,
  Label,
  Button,
  Icon,
  Title,
  List,
  ListItem,
} from 'native-base';


var loop = [];

export default class card extends Component {

  constructor(){
    super()
    this.state = {
      name:'',
    }
  }

  renderHeader() {

    return (
        <Header>

          <Left>
              {/* <Icon name='ios-menu'/>   */}
          </Left>

          <Body>
            <Title>Header</Title>
          </Body>

          <Right>
            {/* <Icon name='navigate' /> */}
          </Right>

        </Header>
    );
  }

  renderContent() {

    return (
        <Content>

          <Form>

            <Item floatingLabel>

              <Label>Type text in here</Label>
              <Input onChangeText = {(text) => {this.setState({name:text})}} />
            </Item>

            <Button full primary action="submit">
            <Text>Add</Text>
          </Button>

          </Form>

          <List>

            <ListItem itemDivider>
              <Text>Task :  {loop} </Text>
            </ListItem>

          </List>

        </Content>
    );
  }

  render() {


    for(let i = 0; i < 1; i++){
        loop.push(
          <Text>{this.state.name} {'\n'}</Text>
        );
    }

    return (
      <Container>

        {/* HEADER */}
        {this.renderHeader()}

        {/* CONTENT */}
        {this.renderContent()}

      </Container>
    );
  }
}


AppRegistry.registerComponent('card', () => card);
