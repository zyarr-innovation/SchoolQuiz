import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';

export class Quiz {
    private io: SocketIOServer;
    private currentQuestion: number = 0;
    private quizRunning: boolean = false;

    constructor(io: SocketIOServer) {
        this.io = io;
        this.setupSocketHandlers();
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
        this.io.emit('message', 'Quiz has started!');
    }

    public stopQuiz() {
        this.quizRunning = false;
        this.io.emit('message', 'Quiz has stopped!');
    }

    public nextQuestion() {
        this.currentQuestion++;
        this.io.emit('message', `Moving to question ${this.currentQuestion}`);
    }
}
