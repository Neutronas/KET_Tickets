import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { PossibleAnswer } from "./PossibleAnswer";

export class Question extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.image} />
        <Text style={styles.title}> {this.props.title}</Text>
        {this.props.answers.map((prop) => {
            return (
                <PossibleAnswer key={prop.id} text={prop.text} />
            );
        })}
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
  
