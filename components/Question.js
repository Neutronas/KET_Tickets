import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { PossibleAnswer } from "./PossibleAnswer";

export class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false,
      numberOfCorrectAnswers: this.getNumberOfCorrectAnswers()
    }
  }

  getNumberOfCorrectAnswers() {
    var number = 0;
    this.props.answers.forEach(answer => {
      if (answer.correct)
        number++;
    });
    return number;
  }

  componentDidUpdate(prevProps) {
    // if props are different
    if (this.props.title !== prevProps.title) {
      this.setState({
        numberOfCorrectAnswers: this.getNumberOfCorrectAnswers()
      });
    }
  }

  render() {
    return (

      <View>
        <Image source={this.props.image} />
        <Text style={styles.title}> {this.props.title}</Text>
        {this.props.answers.map((prop) => {
          return (
            <PossibleAnswer key={prop.id} text={prop.text} isCorrect={prop.correct} />
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

