import { map, Observable } from 'rxjs';
import { IQuestion } from '../../model/model';
import { QuestionCollection } from './questionCollection';

const NUMBER_OF_QUESTIONS = 50;
export class QuestionList {
  private questionCollection: QuestionCollection;
  private questionList!: IQuestion[];
  private currentQuestionIndex = 0;
  private language = 'en';

  constructor() {
    this.questionCollection = new QuestionCollection();
    this.language = 'en';
    this.getQuestions().subscribe(data => this.questionList = data);
  }

  getQuestions(): Observable<IQuestion[]> {
    return this.questionCollection.get(this.language).pipe(
      map((questions) => {
        const randomQuestions = this.getRandomQuestions(
          questions,
          NUMBER_OF_QUESTIONS
        );
        return randomQuestions.map((question) =>
          this.randomizeOptions(question)
        );
      })
    );
  }
  
  private getRandomQuestions(
    questions: IQuestion[],
    count: number
  ): IQuestion[] {
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    // Return the first `count` questions
    return questions.slice(0, count);
  }

  private randomizeOptions(question: IQuestion): IQuestion {
    const options = [...question.options];
    const correctAnswer = options[question.answer - 1]; // Get the correct answer using 1-based index
    const shuffledOptions = options
      .map((option) => ({ option, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ option }) => option);
    const newAnswerIndex = shuffledOptions.indexOf(correctAnswer) + 1; // Adjust back to 1-based index

    return {
      ...question,
      options: shuffledOptions,
      answer: newAnswerIndex,
    };
  }

  getList(): IQuestion[] {
    return this.questionList;
  }

  getQuestion(): IQuestion {
    let currentQuestion: IQuestion = this.questionList[this.currentQuestionIndex];
    return currentQuestion;
  }

  getAnswer(): number {
    return this.questionList[this.currentQuestionIndex].answer;
  }

  moveToNext(): boolean {
    let isComplete = false;
    ++this.currentQuestionIndex;

    if (this.currentQuestionIndex == this.questionList.length) {
      this.currentQuestionIndex = 0;
      isComplete = true;
    } else {
      let currentQuestion: IQuestion = this.questionList[this.currentQuestionIndex];
      this.questionList[this.currentQuestionIndex] = this.randomizeOptions(currentQuestion);
    }

    return isComplete;
  }
}