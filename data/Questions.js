import Question from "../models/Question.js";
import Data from "./Data.js";

const questions = Data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);

export default questions;
