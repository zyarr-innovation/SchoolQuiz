import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EMPTY, from, of } from "rxjs";
import { MessageConstant } from "../../../../model/msg-const";
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
            question: 'Which is the Best Quiz App',
            optionList: ['Zyarr Quiz', 'Zyarr Quiz', 'Zyarr Quiz', 'Zyarr Quiz'],
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
        return this.http.get<string>(`${MessageConstant.baseUrl}${MessageConstant.apiStartQuiz}`);
    }
    stopQuiz() {
        return this.http.get<string>(`${MessageConstant.baseUrl}${MessageConstant.apiStopQuiz}`);
    }
    nextQuestion() {
        return this.http.get<IQuestion>(`${MessageConstant.baseUrl}${MessageConstant.apiNextQuestion}`);
    }
    anwerQuestion() {
        return this.http.get<IQuestion>(`${MessageConstant.baseUrl}${MessageConstant.apiAnswerQuestion}`);
    }

    //====================================| Participants Functions
    getParticipantList() {
        return this.http.get<IParticipant[]>(`${MessageConstant.baseUrl}${MessageConstant.apiGetParticipantList}`);
    }

}