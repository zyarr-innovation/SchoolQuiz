import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';
import { QuestionList } from './server-data/questions/question-list';
import { IParticipant, IQuestion } from '../model/model';
import { MessageConstant } from '../model/msg-const';

export class Quiz {
    private io: SocketIOServer;
    private quizRunning: boolean = false;
    private questionList: QuestionList

    constructor(io: SocketIOServer) {
        this.io = io;
        this.setupSocketHandlers();
        this.questionList = new QuestionList();
    }

    private setupSocketHandlers() {
        this.io.on('connection', (socket: Socket) => {
            console.log(`A user connected to Quiz: ${socket.id}`);

            //Server wont subscribe to this
            // socket.on('startquiz', () => {
            //     this.startQuiz();
            // });

            // socket.on('stopquiz', () => {
            //     this.stopQuiz();
            // });

            // socket.on('nextquestion', () => {
            //     this.nextQuestion();
            // });

        });
    }

    public startQuiz() {
        this.quizRunning = true;
        let currentQuestion: IQuestion = this.questionList.getCurrent();
        this.io.emit(MessageConstant.msgNextQuestion, currentQuestion);
    }

    public stopQuiz() {
        this.quizRunning = false;
        this.io.emit(MessageConstant.msgStopQuiz, 'Quiz has stopped!');
    }

    public nextQuestion() {
        let isComplete = this.questionList.moveToNext();
        if (isComplete) {
            this.quizRunning = false;
            this.io.emit(MessageConstant.msgStopQuiz, 'Quiz has stopped!');
        } else {
            let currentQuestion: IQuestion = this.questionList.getCurrent();
            this.io.emit(MessageConstant.msgNextQuestion, currentQuestion);
        }
    }

    public answerQuestion() {
        let currentQuestion: IQuestion = this.questionList.getCurrent();
        this.io.emit(MessageConstant.msgAnswerQuestion, currentQuestion.answer);
    }
}
