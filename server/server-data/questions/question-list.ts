import { IQuestion } from '../../../model/model';
import { QuestionCollection } from './questionCollection';

export class QuestionList {
  private questionCollection: QuestionCollection;
  private questionCompleteList: IQuestion[];
  private questionList: IQuestion[];
  private currentQuestionIndex = 0;

  constructor() {
    this.questionCollection = new QuestionCollection();
    this.questionCompleteList = this.questionCollection.get();

    let randomIndex = this.getRandomIndex(this.questionCompleteList.length);
    this.questionList = randomIndex.map(eachIndex => this.questionCompleteList[eachIndex])
    this.questionList.forEach(eachQuestion => this.randomizeOptions(eachQuestion));
  }

  getRandomIndex(maxIndex: number): number[] {
    const nums = new Set<number>();
    while (nums.size !== 20) {
      nums.add(Math.floor(Math.random() * maxIndex) + 1);
    }
    return ([...nums]);
  }

  getRandomOrder(): number[] {
    const numbers: number[] = [0, 1, 2, 3];
    const randomOrder: number[] = [];

    while (numbers.length > 0) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const randomNumber = numbers.splice(randomIndex, 1)[0];
      randomOrder.push(randomNumber);
    }

    return randomOrder;
  }

  randomizeOptions(currentQuestion: IQuestion): IQuestion {
    let orderIndexArray = this.getRandomOrder();

    let optionList: string[] = []
    for (let i = 0; i < orderIndexArray.length; ++i) {
      optionList.push(currentQuestion.optionList[orderIndexArray[i]]);
    }
    currentQuestion.optionList = optionList;

    for (let i = 0; i < orderIndexArray.length; ++i) {
      if (currentQuestion.answer == (orderIndexArray[i] + 1)) {
        currentQuestion.answer = i + 1;
        break;
      }
    }

    return currentQuestion;
  }

  getList(inCount: number): IQuestion[] {
    return this.questionList;
  }

  getCurrent(): IQuestion {
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
      this.randomizeOptions(currentQuestion);
    }

    return isComplete;
  }
}