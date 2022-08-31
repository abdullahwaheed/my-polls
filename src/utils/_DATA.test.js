import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe('_DATA', () => {
  it('verify that the saved question is returned and all expected fields are populated', async() => {
    const question = {
      optionOneText: 'test1',
      optionTwoText: 'test2',
      author: 'sarahedo',
    };
    const result = await _saveQuestion(question);
    expect(result.optionOne.text).toEqual(question.optionOneText);
    expect(result.author).toEqual(question.author);
  });
  it('verify that an error is returned if incorrect data is passed to the _saveQuestion function', async() => {
    const question = {
    };
    await expect(_saveQuestion(question)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
  });

  it('verify that the saved question answer is returned and all expected fields are populated', async() => {
    const question = {
      authedUser: 'mtsamis',
      qid: 'vthrdm985a262al8qx3do',
      answer: 'optionTwo',
    };
    const result = await _saveQuestionAnswer(question);
    expect(result).toEqual(true);
  });
  it('verify that an error is returned if incorrect data is passed to the _saveQuestionAnswer function', async() => {
    const question = {
    };
    await expect(_saveQuestionAnswer(question)).rejects.toEqual('Please provide authedUser, qid, and answer');
  });
});
