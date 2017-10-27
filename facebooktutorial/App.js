import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Basics from './Basics';
import Props from './Props';
import WhatToDo from './WhatToDo';
import State from './State';
import Style from './Style';
import HeightWidth from './HeightWidth';
import FlexBox from './FlexBox';
import TextInput from './TextInput';
import Touches from './Touches';
import ScrollView from './ScrollView';
import ListViews from './ListViews';
import NetWorking from './NetWorking';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Xu Zhen Yang</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('heightwidth')} title="HeightWidth" />
        <Touchable onPress={() => navigate('flexbox')} title="FlexBox" />
        <Touchable onPress={() => navigate('textinput')} title="TextInput" />
        <Touchable onPress={() => navigate('touches')} title="Touches" />
        <Touchable onPress={() => navigate('scrollview')} title="ScrollView" />
        <Touchable onPress={() => navigate('listviews')} title="ListViews" />
        <Touchable onPress={() => navigate('networking')} title="NetWorking" />
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  state: { screen: State },
  style: { screen: Style },
  heightwidth: { screen: HeightWidth },
  flexbox: { screen: FlexBox },
  textinput: { screen: TextInput },
  touches: { screen: Touches },
  scrollview: { screen: ScrollView },
  listviews: { screen: ListViews },
  networking: { screen: NetWorking },
})

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})
