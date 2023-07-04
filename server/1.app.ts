import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { Quiz } from './3.quiz';
import { setupQuizRoutes } from './2.quiz-routes';
import mime from 'mime';
import { ParticipantList } from './3.participant';
import { setupParticipantRoutes } from './2.participant-routes';

export class App {
  private app: express.Application;
  private staticPath: string;
  private port: number;
  private server: http.Server;
  private io: SocketIOServer;
  private quiz: Quiz;
  private participantList: ParticipantList;

  constructor(port: number) {
    this.app = express();
    this.staticPath = path.resolve(__dirname, '../../client/dist/client');

    this.port = port;
    this.server = http.createServer(this.app);
    this.io = new SocketIOServer(this.server, {
      cors: {
        origin: '*', // Replace '*' with your specific allowed origins
        methods: ['GET', 'POST'],
      },
    });
    this.quiz = new Quiz(this.io);
    this.participantList = new ParticipantList(this.io);

    this.setupMiddleware();
  }

  private setupContentSecurity() {
    const cspConfig = {
      'default-src': ["'self'"],
      'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "http://localhost:3000"], // Add 'http://localhost:3000' for Socket.IO
      'style-src': ["'self'", "'unsafe-inline'"],
      'img-src': ["'self'", "data:"],
      'font-src': ["'self'"],
    };

    // Function to build the CSP header value
    function getCSPHeaderValue(config: { [key: string]: string[] }) {
      const directives = Object.keys(config).map((key) => {
        const sources = config[key].join(' ');
        return `${key} ${sources}`;
      });
      return directives.join('; ');
    }

    // Middleware to set the CSP header
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Content-Security-Policy', getCSPHeaderValue(cspConfig));
      next();
    });
  }

  private setupStaticFileHeader() {
    // Serve static files with correct Content-Type headers
    this.app.use(express.static(this.staticPath, {
      setHeaders: (res, filePath) => {
        const contentType = mime.getType(filePath);
        if (contentType) {
          res.setHeader('Content-Type', contentType);
        }
      },
    }));
  }

  private setupMiddleware() {
    // Middleware setup, same as before
    this.setupStaticFileHeader();
    this.setupContentSecurity();
    this.setupRoutes();
  }

  private setupRoutes() {
    // Serve static files, same as before

    const quizRoutes = setupQuizRoutes(this.quiz);
    this.app.get('/api/startquiz', quizRoutes.startQuiz);
    this.app.get('/api/stopquiz', quizRoutes.stopQuiz);
    this.app.get('/api/nextquestion', quizRoutes.nextQuestion);
    this.app.get('/api/answerquestion', quizRoutes.answerQuestion);

    const participantRoutes = setupParticipantRoutes(this.participantList);
    this.app.get('/api/addparticipant', participantRoutes.addParticipant);
    this.app.get('/api/removeparticipant', participantRoutes.removeParticipant);
    this.app.get('/api/getparticipantlist', participantRoutes.getParticipantList);

    this.app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(this.staticPath, 'index.html'));
    });
  }

  public start() {
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const port = 3000;
const app = new App(port);
app.start();
