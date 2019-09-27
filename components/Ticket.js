import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import {Question} from './Question';

// temp fake database file, will need rework
import {database} from '../data/database';

export class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            correctness: []
        }
    }

    nextQuestion = () => {
        // Jei yra dar likusiu klausimu, rodom kita
        if (database.questions.length-1 >= this.state.currentQuestion+1) {
            var nextQuestion = this.state.currentQuestion + 1;
            this.setState({
                currentQuestion:  nextQuestion
            })
        } else {
            Alert.alert('Testas baigtas');
        }
            
    }

    render() {
        return (
        <View>
            <Question 
                title={database.questions[this.state.currentQuestion].title}
                image={database.questions[this.state.currentQuestion].image} 
                answers={database.questions[this.state.currentQuestion].answers}
            />
           <Button
            title="Kitas klausimas"
            onPress={() => {
                this.nextQuestion();
            }} />
        </View>
        );
  }
}
