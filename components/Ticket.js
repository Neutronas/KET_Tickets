import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Question from './Question/Question';
import { withNavigation } from 'react-navigation';


const Ticket = ({navigation}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let questions = useSelector(state => state).questions;

    const totalNumberOfQuestions = Object.keys(questions).length;
    const moreQuestions = currentQuestion < totalNumberOfQuestions - 1;

    const handleNextQuestionButtonPress = () => {
        setCurrentQuestion(currentQuestion + 1);
        Alert.alert(JSON.stringify(questions[currentQuestion]));
    }

    const handleFinishButtonPress = () => {
        navigation.navigate('Results')
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

export default withNavigation(Ticket);
