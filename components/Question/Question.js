import React, { useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { PossibleAnswer } from './PossibleAnswer';
import QuestionTitle from './QuestionTitle';

export default Question = ({ index, question }) => {
  const dispatch = useDispatch();

  const handleChange = (answerIndex) => () => {
    dispatch({
      type: 'TOGGLE_ANSWER',
      questionIndex: index,
      answerIndex
    });
  }

  let possibleAnswerList = [];
  possibleAnswerList = question.answers
    .map((answer, index) =>
      <PossibleAnswer
        key={index}
        text={answer.text}
        onChange={handleChange(index)} />
    );

  return (
    <View>
      <Image source={question.image} />
      <QuestionTitle>{question.title}</QuestionTitle>
      {possibleAnswerList}
    </View>
  );
}



