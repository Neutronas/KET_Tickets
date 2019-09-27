import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import {Question} from './Question';

// temp fake database file, will need rework
import {database} from '../data/database';

export class MainProgress extends Component {
    state = {
        currentQuestion: 0,
    }

    nextQuestion = () => {
        // Jei yra dar likusiu klausimu, rodom kita
        if (database.questions.length-1 >= this.state.currentQuestion+1) {
            this.setState({
                currentQuestion:  this.state.currentQuestion+1
            })
        } else {
            Alert.alert('Testas baigtas');
        }
            
    }

    render() {
        return (
        <View>
            <Question title={database.questions[this.state.currentQuestion].title} image={database.questions[this.state.currentQuestion].image} />
            <Button
                title="Kitas klausimas"
                onPress={() => {
                    this.nextQuestion()
                }}
            />
        </View>
        );
  }
}
