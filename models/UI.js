export default class UI {
  constructor() {}

  /**
   *
   * @param {string} text
   */

  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string[]} choices
   */

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "btn";
      button.addEventListener("click", () => callback(choices[i]));
      choicesContainer.append(button);
    }
  }

  showScores(score) {
    const quizEndHTML = `
      <h1>Result</h1>
      <h2>Your score is ${score}</h2>`;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }

  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
