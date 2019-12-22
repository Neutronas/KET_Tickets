import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getCurrentFrame } from 'expo/build/AR';


const Result = ({navigation}) => {
    const questions = useSelector(state => state).questions;
    // Score percentage to pass
    const passScore = 80;
    let [score, setScore] = useState(0);
    let [scorePercentage, setScorePercentage] = useState(0);
    const totalNumberOfQuestions = Object.keys(questions).length;

    useEffect(() => {
        for (let key in questions) {
            if (questions[key].isAnsweredCorrectly)
                score++;
        }
        setScore(score);
        setScorePercentage((score/totalNumberOfQuestions*100).toFixed(2));
      }, []);    

      const handleSolveAgain = () => {
        // TODO: Reset state and go home.
        Alert.alert("To do: reset state and go home");
    }

    return (
        <View>
        {scorePercentage >= passScore ? (
            <Text style={styles.success}>SVEIKINAME! Išlaikėte egzaminą!</Text>
        ) : (
            <Text style={styles.fail}>Deja egzamino išlaikyti nepavyko...</Text>
        )
        }
            <Text>Jūsų teisingai atsakytų atsakymų skaičius yra: {score} / {totalNumberOfQuestions} </Text>
            <Text>Jūsų rezultatas yra: {scorePercentage}% </Text>
            <Button
                title="Spręsti dar kartą"
                onPress={handleSolveAgain} />
        </View>
    );
};


const styles = StyleSheet.create({
    success: {
        fontSize: 24,
        color: 'green'
    },
    fail: {
        fontSize: 24,
        color: 'red'
    }
  });

export default withNavigation(Result);