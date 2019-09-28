class TicketsStore {
    questions = [];
    currentQuestionCorrectAnswers = 0;

	get completedQuestionsCount() {
    	return this.questions.filter(
			question => question.completed === true
		).length;
    }

    markQuestion(id, correctAnswers) {
		this.questions.push({
            id: id,
            correctAnswers: correctAnswers,
            completed: false,
            correct: false
        });
    }
    
    questionisCorrect(id) {
        this.questions[id].correct = true;
    }
}

export const ticketsStore = new TicketsStore();