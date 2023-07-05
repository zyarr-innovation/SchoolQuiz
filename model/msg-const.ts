export class MessageConstant {
    static readonly baseUrl = 'http://localhost:3000';

    static readonly apiStartQuiz = '/api/startquiz';
    static readonly apiStopQuiz = '/api/stopquiz';
    static readonly apiNextQuestion = '/api/nextquestion';
    static readonly apiAnswerQuestion = '/api/answerquestion';

    static readonly apiAddParticipant = '/api/addparticipant';
    static readonly apiRemoveParticipant = '/api/removeparticipant';
    static readonly apiGetParticipantList = '/api/getparticipantlist';


    static readonly msgNextQuestion = 'msgNextQuestion';
    static readonly msgStartQuiz = 'msgStartQuiz';
    static readonly msgStopQuiz = 'msgStopQuiz';
    static readonly msgError = 'error';
    static readonly msgAnswerQuestion = 'msgAnswerQuestion';
    static readonly msgUpdateAnswer = 'msgUpdateAnswer';
}