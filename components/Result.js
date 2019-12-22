import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';


const Result = ({navigation}) => {
    const calculateScore = () => {
        const questions = useSelector(state => state).questions;
        let score = 0;
        for (let key in questions) {
            if (questions[key].isAnsweredCorrectly)
                score++;
        }
        return score;
    }

    const [score, setScore] = useState(calculateScore);
    


    const totalNumberOfQuestions = Object.keys(questions).length;

    return (
        <View>
            <Text>Tavo rezultatas yra: {score} </Text>
        </View>
    );
};

export default withNavigation(Result);
