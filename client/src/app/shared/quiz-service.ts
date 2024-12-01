import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EMPTY, catchError, from, of, tap, throwError } from "rxjs";
import { MessageConstant } from "../../../../model/msg-const";
import { IParticipant, IQuestion } from "../../../../model/model";


@Injectable({
    providedIn: 'root',
})
export class QuizService {
    private participantList: IParticipant[] = [];
    constructor(private http: HttpClient) { }

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

    registerParticipant(inPartipantName: string, inParticipantPassword: string) {
        let inParticipant: IParticipant = {
            id: 0,
            name: inPartipantName,
            email: `${inPartipantName}@zyarr.com`,
            score: 0,
            timespent: 0,
            answer: []
        }

        return this.http.post<IParticipant>(
            `${MessageConstant.baseUrl}${MessageConstant.apiAddParticipant}`,
            inParticipant
        ).pipe(
            tap(participant => this.participantList.push(participant)),
            catchError(error => {
                console.log('An error occurred:', error);
                // Handle the error as per your requirements
                return throwError('Something went wrong. Please try again later.');
            })
        )

    }

    getParticipant(id: number) {
        return this.http.get<IParticipant>(`${MessageConstant.baseUrl}${MessageConstant.apiGetParticipant}?id=${id}`);
    }
}