import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EMPTY, from, of } from "rxjs";
import { IParticipant, IQuestion } from "../../../../model/model";

@Injectable({
    providedIn: 'root',
})
export class QuizService {
    private participantList: IParticipant[] = [];
    private questionCurrent: IQuestion;

    constructor(private http: HttpClient) {
        this.questionCurrent = {
            id: 0,
            question: "Which is the Best Quiz App",
            optionList: ["Zyarr Quiz", "Zyarr Quiz", "Zyarr Quiz", "Zyarr Quiz"],
            answer: 1
        };
    }

    registerParticipant(inParticipantName: string, inParticipantEmail: string) {
        let participant: IParticipant = {
            id: this.participantList.length + 1,
            name: inParticipantName,
            email: inParticipantEmail,
            score: 0,
            timespent: 0,
            answer: []
        }
        let foundParticipant = this.participantList.push(participant);
        return foundParticipant;
    }


    //====================================| Quiz Functions
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

    //====================================| Participants Functions
    getParticipantList() {
        return this.http.get<IParticipant[]>("http://localhost:3000/api/getparticipantlist");
    }

}