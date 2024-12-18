export class MessageConstant {
    //static readonly baseUrl = window.location.origin;
    static readonly baseUrl = typeof window !== 'undefined' ? window.location.origin: "";

    static readonly apiStartQuiz = '/api/startquiz';
    static readonly apiStopQuiz = '/api/stopquiz';
    static readonly apiNextQuestion = '/api/nextquestion';
    static readonly apiAnswerQuestion = '/api/answerquestion';

    static readonly fetchAddParticipant = '/api/fetchparticipant';
    static readonly apiAddParticipant = '/api/addparticipant';
    static readonly apiGetParticipant = '/api/getparticipant';
    static readonly apiRemoveParticipant = '/api/removeparticipant';

    static readonly msgAddparticpant = 'addparticpant';
    static readonly msgNextQuestion = 'msgNextQuestion';
    static readonly msgStartQuiz = 'msgStartQuiz';
    static readonly msgStopQuiz = 'msgStopQuiz';
    static readonly msgError = 'error';
    static readonly msgAnswerQuestion = 'msgAnswerQuestion';
    static readonly msgUpdateCandidate = 'msgUpdateCandidate';
    static readonly msgUpdateDashboard = 'msgUpdateDashboard';
}