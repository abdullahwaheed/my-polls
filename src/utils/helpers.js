import { _saveQuestionAnswer, _saveQuestion, _getQuestions, _getUsers } from "./_DATA";

export const getUsers = () => _getUsers();
export const getQuestions = () => _getQuestions();
export const saveQuestion = question => _saveQuestion(question);
export const saveQuestionAnswer = questionAnswer => _saveQuestionAnswer(questionAnswer);
