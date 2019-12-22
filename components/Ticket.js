import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';

import Question from './Question/Question';
import QuestionSelect from './QuestionSelect/QuestionSelect';
import Navigation from './Navigation';


const Ticket = ({ navigation }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let questions = useSelector(state => state).questions;

    const totalNumberOfQuestions = Object.keys(questions).length;
    const moreQuestions = currentQuestion < totalNumberOfQuestions - 1;

    const handleNextQuestionButtonPress = () => {
        setCurrentQuestion(currentQuestion + 1);
    }

    const handleFinishButtonPress = () => {
        navigation.navigate('Results')
    }

    const handleQuestionSelectPress = (questionIndex) => () => {
        setCurrentQuestion(questionIndex);
    };

    const handleNavigationPress = (change) => () => {
        if (change > 0 && moreQuestions)
            setCurrentQuestion(currentQuestion + 1);
        if (change < 0 && currentQuestion != 0)
            setCurrentQuestion(currentQuestion - 1);
    };

    return (
        <View>
            <Question
                index={currentQuestion}
                question={questions[currentQuestion]}
            />
            <Navigation
                onPress={handleNavigationPress}
            />
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

export default withNavigation(Ticket);
