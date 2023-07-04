export interface IQuestion {
    question: string;
    optionList: string[];
    answer: number
}

export interface IParticipant {
    id: number;
    name: string;
    email: string;
    score?: number;
    timespent?: number;
};