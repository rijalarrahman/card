import React, { Component } from 'react';
import List from './List';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  AppRegistry
} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label, Button, Body} from 'native-base';

export default class card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    }

    onChange = (text) => {
    this.setState({term: text});
    }

    onSubmit = (event) => {
      event.preventDefault()

      if (this.state.term == '') {
        return;
      };

      const array = [...this.state.items]
      array.push(this.state.term)

      this.setState({
        term: '',
        items: array
      });
    }

  render() {
    return (
      <Container>

      <Header style={{backgroundColor: '#39547f'}}>

      <Body>
      <Text style={{color: '#FFF', fontSize:20}}>Header</Text>
      </Body>

      <Button rounded onPress={this.onSubmit} style={{backgroundColor:'#d7dae0'}}>
        <Text style={{fontSize:25}}>+</Text>
      </Button>

      </Header>

        <StatusBar hidden = {true}/>
      <Content>
          <Form>
            <Item floatingLabel>
              <Label>Input Text in Here</Label>
              <Input
                value={this.state.term}
                onChangeText={this.onChange}
                onSubmitEditing={this.onSubmit}
                style={localStyles.entree}
              />
            </Item>
          </Form>

          <View>
            <List items={this.state.items} />
          </View>

          <View style={localStyles.buttonContainer}>

          </View>

        </Content>

      </Container>
    )

  }
}

const localStyles = StyleSheet.create({

  entree: {
    padding: 15,
    width: 350,
    height: 50,
    },

  buttonContainer: {
    width: 200,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
    },

});

AppRegistry.registerComponent('card', () => card);
