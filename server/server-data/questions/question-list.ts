import { IQuestion } from '../../../model/model';
import { QuestionCollection } from './questionCollection';

var g_RequestedNumberOfQuestions = 5
export class QuestionList {
  private questionCollection: QuestionCollection;
  private questionCompleteList: IQuestion[];
  private questionList: IQuestion[];
  private currentQuestionIndex = 0;

  constructor() {
    this.questionCollection = new QuestionCollection();
    this.questionCompleteList = this.questionCollection.get();

    if (this.questionCompleteList.length < g_RequestedNumberOfQuestions) {
      g_RequestedNumberOfQuestions = this.questionCompleteList.length
    }

    let randomIndex = this.getRandomIndex(this.questionCompleteList.length);
    this.questionList = randomIndex.map(eachIndex => {
      --this.questionCompleteList[eachIndex - 1].answer
      return this.questionCompleteList[eachIndex - 1]
    })
    this.questionList.forEach(eachQuestion => this.randomizeOptions(eachQuestion));
  }

  getRandomIndex(maxIndex: number): number[] {
    const nums = new Set<number>();
    while (nums.size !== g_RequestedNumberOfQuestions) {
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
    //console.log("Original Ans (%d): %s", currentQuestion.answer, currentQuestion.optionList[currentQuestion.answer])
    let storedOptionAnswer = currentQuestion.optionList[currentQuestion.answer]

    let orderIndexArray = this.getRandomOrder();
    let newOptionList: string[] = []
    for (let i = 0; i < orderIndexArray.length; ++i) {
      let recentOption: string = currentQuestion.optionList[orderIndexArray[i]]
      newOptionList.push(recentOption);

      if (storedOptionAnswer === recentOption) {
        currentQuestion.answer = i
      }
    }
    currentQuestion.optionList = newOptionList;

    //console.log("New Ans (%d): %s", currentQuestion.answer, currentQuestion.optionList[currentQuestion.answer])

    return currentQuestion;
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