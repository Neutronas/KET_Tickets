import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { PossibleAnswer } from './PossibleAnswer';
import { ticketsStore } from '../../data/ticketsStore';
import QuestionTitle from './QuestionTitle';

export default Question = ({ id, image, title, answers }) => {
  useEffect(() => {
    ticketsStore.markQuestion(id, getCorrectAnswerMap());
  }, [id]);

  const getCorrectAnswerMap = () => {
    const answerMap = [];
    answers.forEach(answer => {
      if (answer.correct)
        answerMap.push(answer.id);
    });
    return answerMap;
  };

  let possibleAnswerList = [];
  if (answers) {
    possibleAnswerList = answers
      .map((answer) =>
        <PossibleAnswer
          key={answer.id}
          text={answer.text}
          isCorrect={answer.correct}
          id={answer.id} />
      );
  }

  return (
    <View>
      <Image source={image} />
      <QuestionTitle>{title}</QuestionTitle>
      {possibleAnswerList}
    </View>
  );
}



