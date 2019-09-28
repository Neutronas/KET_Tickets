import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { Question } from './Question';

// temp fake database file, will need rework
import { database } from '../data/database';
import { ticketsStore } from '../data/ticketsStore';

export class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
        }
    }

    getInitialState() {
        ticketsStore.questions = [];
        this.setState  ({
            currentQuestion: 0,
        });
    }

    nextQuestion = () => {
        ticketsStore.questions[this.state.currentQuestion].completed = true;
        // Patikrinam ar atsakytas teisingai:
        // if (ticketsStore.questions[this.state.currentQuestion].correctAnswers == ticketsStore.currentQuestionCorrectAnswers) {
        //     ticketsStore.questionisCorrect(this.state.currentQuestion);
        // }
        var answerMap = ticketsStore.questions[this.state.currentQuestion].answerMap;
        var currentAnswerMap = ticketsStore.currentAnswerMap.sort(function (a, b) { return a - b });
        ticketsStore.questions[this.state.currentQuestion].userAnswers = currentAnswerMap;
        if (this.compareArrays(answerMap, currentAnswerMap)) {
            ticketsStore.questionisCorrect(this.state.currentQuestion);
        }
        // Butinai reikia nunulinti storage'e atsakytu teisingu klausimu kieki
        ticketsStore.currentQuestionCorrectAnswers = 0;
        ticketsStore.currentAnswerMap = [];
        // Jei yra dar likusiu klausimu, rodom kita
        if (database.questions.length - 1 >= this.state.currentQuestion + 1) {
            var nextQuestion = this.state.currentQuestion + 1;
            this.setState({
                currentQuestion: nextQuestion
            });
        } else {
            let correctAnswers = 0;
            ticketsStore.questions.forEach(question => {
                if (question.correct) {
                    correctAnswers += 1;
                }
            });
            Alert.alert(
                'Testas baigtas', 
                'Viso klausimų: ' + ticketsStore.questions.length + '. Teisingai atsakyta: ' + correctAnswers + '. Surinkta ' + Math.floor((correctAnswers / ticketsStore.questions.length) * 100) + '%',
                [
                    {
                        text: 'Iš naujo',
                        onPress: () => this.getInitialState(),
                        style: 'cancel',
                      },
                    {
                      text: 'Rezultatas',
                      onPress: () => console.log('Nori peržiūrėti rezultatus'),
                    },
                  ],
                );
            console.log(ticketsStore.questions);
        }
    }

    compareArrays(array1, array2) {
        return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
    }

    render() {
        return (
            <View>
                <Question
                    id={database.questions[this.state.currentQuestion].id}
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
