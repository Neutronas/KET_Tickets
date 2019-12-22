import React, { useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { PossibleAnswer } from './PossibleAnswer';
import QuestionTitle from './QuestionTitle';

export default Question = ({ index, question }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'TOGGLE_VISITED',
      questionIndex: index,
    });
  }, [index]);

  const handleChange = (answerIndex) => () => {
    dispatch({
      type: 'TOGGLE_ANSWER',
      questionIndex: index,
      answerIndex
    });
  }

  let possibleAnswerList = [];
  possibleAnswerList = question.answers
    .map((answer, index) => {
      return (
        <PossibleAnswer
          key={index}
          text={answer.text}
          onChange={handleChange(index)}
          isChecked={answer.isChecked} />
      );
    }
    );

  return (
    <View>
      <Image source={question.image} />
      <QuestionTitle>{question.title}</QuestionTitle>
      {possibleAnswerList}
    </View>
  );
}



