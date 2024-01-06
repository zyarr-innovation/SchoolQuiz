export interface IQuestion {
    id: number;
    question: string;
    optionList: string[];
    answer: number
};

export interface IAnswer {
    questionid: number;
    selected: number;
    actual: number;
    timespent: number;
}

export interface IParticipant {
    id: number;
    name: string;
    email: string;
    score: number;
    timespent: number;
    answer: IAnswer[]
};