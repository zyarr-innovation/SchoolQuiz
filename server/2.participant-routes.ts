import { Request, Response } from 'express';
import { ParticipantList } from './3.participant';

export function setupParticipantRoutes(participantList: ParticipantList) {
    return {
        addParticipant: (req: Request, res: Response) => {
            let newParticipant = req.body;
            let addedparticipant = participantList.add(newParticipant);
            res.status(200).json(addedparticipant);
        },

        getParticipant: (req: Request, res: Response) => {
            let participantId = req.query.id;
            let gotparticipant = participantList.getById(+participantId!);
            res.status(200).json(gotparticipant);
        },

        removeParticipant: (req: Request, res: Response) => {
            let exitingParticipant = req.body;
            participantList.remove(exitingParticipant);
            res.status(200).json({ message: 'Removed Participant!' });
        },

        getParticipantList: (req: Request, res: Response) => {
            let newParticipantList = participantList.getList();
            res.status(200).json(newParticipantList);
        },
    };
}
