import { Request, Response } from 'express';
import { Quiz } from './3.quiz';

export function setupQuizRoutes(quiz: Quiz) {
    return {
        startQuiz: (req: Request, res: Response) => {
            quiz.startQuiz();
            res.status(200).json({ message: 'Quiz started!' });
        },

        stopQuiz: (req: Request, res: Response) => {
            quiz.stopQuiz();
            res.status(200).json({ message: 'Quiz stopped!' });
        },

        nextQuestion: (req: Request, res: Response) => {
            quiz.nextQuestion();
            res.status(200).json({ message: 'Moving to the next question!' });
        },
    };
}
