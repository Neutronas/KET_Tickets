import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Question from './Question/Question';
import QuestionSelect from './QuestionSelect/QuestionSelect';


export const Ticket = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let questions = useSelector(state => state).questions;

    const totalNumberOfQuestions = Object.keys(questions).length;
    const moreQuestions = currentQuestion < totalNumberOfQuestions - 1;

    const handleNextQuestionButtonPress = () => {
        setCurrentQuestion(currentQuestion + 1);
    }

    const handleFinishButtonPress = () => {
        let score = 0;
        for (let key in questions) {
            if (questions[key].isAnsweredCorrectly)
                score++;
        }
        Alert.alert(score / totalNumberOfQuestions * 100 + '%')
    }

    const handleQuestionSelectPress = (questionIndex) => () => {
        setCurrentQuestion(questionIndex);
    };

    return (
        <View>
            <Question
                index={currentQuestion}
                question={questions[currentQuestion]}
            />
            {moreQuestions ?
                <Button
                    title="Kitas klausimas"
                    onPress={handleNextQuestionButtonPress}
                />
                : null}
            <QuestionSelect
                activeQuestionIndex={currentQuestion}
                onPress={handleQuestionSelectPress}
            />
            <Button
                title="Baigti"
                onPress={handleFinishButtonPress}
            />
        </View>
    );
};