import { _saveQuestionAnswer, _saveQuestion, _getQuestions, _getUsers } from "./_DATA";

export const getUsers = () => _getUsers();
export const getQuestions = () => _getQuestions();
export const saveQuestion = question => _saveQuestion(question);
export const saveQuestionAnswer = questionAnswer => _saveQuestionAnswer(questionAnswer);

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}
  
export function formatPolls(polls) {
  return Object.values(polls).map(poll => ({
    id: poll.id,
    author: poll.author,
    timestamp: poll.timestamp,
    votes: poll.optionOne.votes.concat(poll.optionTwo.votes)
  }))
  // todo: add sort by
}
