import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export class Question extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.image} />
        <Text style={styles.title}> {this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: 16,
    }
});
  
