import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';
import { QuestionList } from './server-data/questions/question-list';
import { IQuestion } from './server-data/questions/questionCollection';

export class Quiz {
    private io: SocketIOServer;
    private currentQuestion: number = 0;
    private quizRunning: boolean = false;
    private questionList: QuestionList

    constructor(io: SocketIOServer) {
        this.io = io;
        this.setupSocketHandlers();
        this.questionList = new QuestionList();
    }

    private setupSocketHandlers() {
        this.io.on('connection', (socket: Socket) => {
            console.log(`A user connected: ${socket.id}`);

            socket.on('startquiz', () => {
                this.startQuiz();
            });

            socket.on('stopquiz', () => {
                this.stopQuiz();
            });

            socket.on('nextquestion', () => {
                this.nextQuestion();
            });
        });
    }

    public startQuiz() {
        this.quizRunning = true;
        this.currentQuestion = 0;
        this.io.emit('msgStartQuiz', 'Quiz has started!');
    }

    public stopQuiz() {
        this.quizRunning = false;
        this.io.emit('msgStopQuiz', 'Quiz has stopped!');
    }

    public nextQuestion() {
        this.currentQuestion++;
        let currentQuestion: IQuestion = this.questionList.getCurrent()
        this.io.emit('msgNextQuestion', `${this.currentQuestion}`);
        this.questionList.moveToNext();
    }
}
