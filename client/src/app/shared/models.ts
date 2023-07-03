export interface IQuestion {
    question: string;
    options: string[];
    answer: number
}

export interface IParticipant {
    name: string;
    email: string;
    Id: number;
    Score?: number;
    TimeSpent?: Date;
};