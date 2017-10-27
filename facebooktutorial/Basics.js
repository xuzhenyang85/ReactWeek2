import React, { Component } from 'react';
import { Text,View } from 'react-native';

export default class HelloWorldApp extends Component {
  static navigationOptions = { title: "Learn the Basics" }
  render() {
    return (
      <View><Text>Learn The Bacics</Text></View>
    );
  }
}
