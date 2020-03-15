import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class HomeScreen extends Component{
  render(){
    return(
      <View style={{flex:1, alignItems: "center", justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>List of all Barter</Text>
      </View>
    )
  }
}
