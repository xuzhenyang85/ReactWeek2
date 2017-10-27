import React from 'react';
import { View,Text } from 'react-native';

export default class Props extends React.Component {
  static navigationOptions = { title: "Learn about Props" }
  render() {
    return (
      <View>
        <Text>Props</Text>
      </View>
    )
  }
}
