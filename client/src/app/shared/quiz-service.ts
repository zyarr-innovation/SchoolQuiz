import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EMPTY, from, of } from "rxjs";
import { IParticipant, IQuestion } from "./models";

@Injectable({
    providedIn: 'root',
})
export class QuizService {
    private participantList: IParticipant[] = [];
    private questionCurrent: IQuestion;

    constructor(private http: HttpClient) {
        this.questionCurrent = {
            question: "Which is the Best Quiz App",
            optionList: ["Zyarr Quiz", "Zyarr Quiz", "Zyarr Quiz", "Zyarr Quiz"],
            answer: 1
        };
    }

    registerParticipant(inParticipantName: string, inParticipantEmail: string) {
        let participant: IParticipant = {
            id: this.participantList.length,
            name: inParticipantName,
            email: inParticipantEmail
        }
        let foundParticipant = this.participantList.push(participant);
        return foundParticipant;
    }

    getParticipantList() {
        let participantList = this.participantList;
        return participantList;
    }

    startQuiz() {
        return this.http.get<string>("http://localhost:3000/api/startquiz");
    }
    stopQuiz() {
        return this.http.get<string>("http://localhost:3000/api/stopquiz");
    }
    nextQuestion() {
        return this.http.get<IQuestion>("http://localhost:3000/api/nextquestion");
    }
    anwerQuestion() {
        return this.http.get<IQuestion>("http://localhost:3000/api/answerquestion");
    }

    updateScore(
        inParticipantId: number,
        inParticipantscore: number,
        inParticipantTimespent: number,
    ) {
        let foundParticipant = this.participantList[inParticipantId];
        if (foundParticipant) {
            foundParticipant.score = inParticipantscore;
            foundParticipant.timespent = inParticipantTimespent;
        }
    }
}