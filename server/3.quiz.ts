import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';
import { QuestionList } from './server-data/questions/question-list';
import { IParticipant, IQuestion } from '../model/model';

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
        this.io.emit('msgStartQuiz', 'Quiz has started!');
    }

    public stopQuiz() {
        this.quizRunning = false;
        this.io.emit('msgStopQuiz', 'Quiz has stopped!');
    }

    public nextQuestion() {
        let currentQuestion: IQuestion = this.questionList.getCurrent();
        this.io.emit('msgNextQuestion', currentQuestion);
        this.questionList.moveToNext();
    }

    public answerQuestion() {
        let currentQuestion: IQuestion = this.questionList.getCurrent();
        this.io.emit('msgAnswerQuestion', currentQuestion.answer);
    }
}
