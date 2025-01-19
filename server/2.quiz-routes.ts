import { Request, Response } from "express";
import { Quiz } from "./3.quiz";

export function setupQuizRoutes(quiz: Quiz) {
  return {
    getLanguageInfo: (req: Request, res: Response) => {
      let language = quiz.getLanguageInfo();
      res.status(200).json({ message: { language } });
    },
    startQuiz: (req: Request, res: Response) => {
      quiz.startQuiz();
      res.status(200).json({ message: "Quiz started!" });
    },

    stopQuiz: (req: Request, res: Response) => {
      quiz.stopQuiz();
      res.status(200).json({ message: "Quiz stopped!" });
    },

    nextQuestion: (req: Request, res: Response) => {
      quiz.nextQuestion();
      res.status(200).json({ message: "Next Question!" });
    },

    answerQuestion: (req: Request, res: Response) => {
      quiz.answerQuestion();
      res.status(200).json({ message: "Answer Question!" });
    },
  };
}
