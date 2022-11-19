export default class Question {
  /**
   *
   * @param {string} text this is the question's text
   * @param {string[]} choices these are the choices of the question
   * @param {string} answer this is the answer of the question
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice some text to guess
   * @returns {boolean} returns an anwer
   */

  correctAnswer(choice) {
    return choice === this.answer;
  }
}
