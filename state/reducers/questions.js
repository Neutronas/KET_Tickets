import { Alert } from "react-native";

const question = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_ANSWER': {
            const newAnswers = state.answers.map((answer, index) => {
                if (index !== action.answerIndex)
                    return answer;
                return {
                    ...answer,
                    isChecked: !answer.isChecked,
                }
            });
            return {
                ...state,
                answers: newAnswers,
                isAnsweredCorrectly: newAnswers.every((answer) => answer.correct === answer.isChecked),
                hasCheckedAnswers: newAnswers.some((answer) => answer.isChecked),
            }
        }
        case 'TOGGLE_VISITED': {
            return {
                ...state,
                isVisited: true
            }
        }
        default:
            return state
    }
};

const questions = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_ANSWER': {
            return {
                ...state,
                [action.questionIndex]: question(state[action.questionIndex], action)
            }
        }
        case 'TOGGLE_VISITED': {
            return {
                ...state,
                [action.questionIndex]: question(state[action.questionIndex], action)
            }
        }
        default:
            return state
    }
};

export default questions;