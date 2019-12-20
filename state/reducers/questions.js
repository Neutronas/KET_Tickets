const question = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_ANSWER': {
            return {
                ...state,
                answers: answers.map((answer, index) => {
                    if (index !== action.answerIndex)
                        return answer;
                    return {
                        ...answer,
                        isChecked: !answer.isChecked,
                    }
                }),
                hasCheckedAnswers: answers.some((answer) => answer.isChecked),
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
        default:
            return state
    }
};

export default questions;