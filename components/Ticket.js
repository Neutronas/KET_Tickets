import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Question from './Question/Question';


export const Ticket = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let questions = useSelector(state => state).questions;

    const totalNumberOfQuestions = Object.keys(questions).length;
    const moreQuestions = currentQuestion < totalNumberOfQuestions - 1;

    const handleNextQuestionButtonPress = () => {
        setCurrentQuestion(currentQuestion + 1);
        Alert.alert(JSON.stringify(questions[currentQuestion]));
    }

    const handleFinishButtonPress = () => {
        let score = 0;
        for (let key in questions) {
            if (questions[key].isAnsweredCorrectly)
                score++;
        }
        Alert.alert(score / totalNumberOfQuestions * 100 + '%')
    }

    return (
        <View>
            <Question
                index={currentQuestion}
                question={questions[currentQuestion]}
            />
            {moreQuestions ?
                <Button
                    title="Kitas klausimas"
                    onPress={handleNextQuestionButtonPress} />
                : null}
            <Button
                title="Baigti"
                onPress={handleFinishButtonPress} />
        </View>
    );
};