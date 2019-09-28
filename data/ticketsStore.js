class TicketsStore {
    questions = [];
    currentQuestionCorrectAnswers = 0;
    currentAnswerMap = [];

    markQuestion(id, answerMap) {
        this.questions.push({
            id: id,
            answerMap: answerMap,
            completed: false,
            correct: false,
            userAnswers: []
        });
    }

    addAnswerToMap(id) {
        this.currentAnswerMap.push(id);
    }

    removeAnswerFromMap(id) {
        for (let i = 0; i < this.currentAnswerMap.length; i++) {
            const currentId = this.currentAnswerMap[i];
            if (currentId === id)
                this.currentAnswerMap.splice(i, 1);
        }
    }

    questionisCorrect(id) {
        this.questions[id].correct = true;
    }
}

export const ticketsStore = new TicketsStore();