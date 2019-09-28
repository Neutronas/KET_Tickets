import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { PossibleAnswer } from "./PossibleAnswer";
import { ticketsStore } from '../data/ticketsStore';

export class Question extends Component {

  constructor(props) {
    super(props);
    ticketsStore.markQuestion(this.props.id, this.getCorrectAnswerMap());
    console.log('ahahahaha');

  }

  getCorrectAnswerMap() {
    var answerMap = [];
    this.props.answers.forEach(answer => {
      if (answer.correct)
        answerMap.push(answer.id);
    });
    return answerMap;
  }

  componentDidUpdate(prevProps) {
    // if props are different
    if (this.props.title !== prevProps.title) {
      ticketsStore.markQuestion(this.props.id, this.getCorrectAnswerMap())
    }
  }

  render() {
    return (

      <View>
        <Image source={this.props.image} />
        <Text style={styles.title}> {this.props.title}</Text>
        {this.props.answers.map((prop) => {
          return (
            <PossibleAnswer key={prop.id} text={prop.text} isCorrect={prop.correct} id={prop.id} />
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

