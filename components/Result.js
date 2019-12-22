import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';


const Result = ({navigation}) => {
    const questions = useSelector(state => state).questions;
    let [score, setScore] = useState(0);

    useEffect(() => {
        for (let key in questions) {
            console.log(questions[key].title + ' yra atsakymas: ');
            console.log(questions[key].isAnsweredCorrectly);
            if (questions[key].isAnsweredCorrectly)
                score++;
        }
        setScore(score);
      }, []);    

    const totalNumberOfQuestions = Object.keys(questions).length;

    return (
        <View>
            <Text>Tavo rezultatas yra: {score} </Text>
        </View>
    );
};

export default withNavigation(Result);
