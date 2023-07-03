import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { Quiz } from './3.quiz';
import { setupQuizRoutes } from './2.routes';
import mime from 'mime';

export class App {
  private app: express.Application;
  private staticPath: string;
  private port: number;
  private server: http.Server;
  private io: SocketIOServer;
  private quiz: Quiz;

  constructor(port: number) {
    this.app = express();
    this.staticPath = path.resolve(__dirname, '../../client/dist/client');

    this.setupMiddleware();

    this.port = port;
    this.server = http.createServer(this.app);
    this.io = new SocketIOServer(this.server, {
      cors: {
        origin: '*', // Replace '*' with your specific allowed origins
        methods: ['GET', 'POST'],
      },
    });
    this.quiz = new Quiz(this.io);



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

    const routes = setupQuizRoutes(this.quiz);

    this.app.get('/api/startquiz', routes.startQuiz);
    this.app.get('/api/stopquiz', routes.stopQuiz);
    this.app.get('/api/nextquestion', routes.nextQuestion);

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
