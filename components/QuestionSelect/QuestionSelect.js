import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import QuestionSelectItem from './QuestionSelectItem';

export default QuestionSelect = ({activeQuestionIndex, onPress }) => {
    const questions = useSelector(state => state.questions);
    const totalQuestions = Object.keys(questions).length;

    const links = [];
    for (let i = 0; i < totalQuestions; i++) {
        const isActive = activeQuestionIndex === i;
        links.push(
            <QuestionSelectItem
                questionIndex={i}
                key={i}
                isActive={isActive}
                isVisited={questions[i].isVisited}
                onPress={onPress(i)}
            />
        );
    }

    return (
        <ScrollView horizontal style={styles.scrollView}>
            {links}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#EDEDED',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#EDEDED',
    },
});