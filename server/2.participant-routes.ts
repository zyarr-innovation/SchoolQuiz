import { Request, Response } from 'express';
import { ParticipantList } from './3.participant';

export function setupParticipantRoutes(participantList: ParticipantList) {
    return {
        addParticipant: (req: Request, res: Response) => {
            let newParticipant = JSON.parse(req.body);
            let addedparticipant = participantList.add(newParticipant);
            res.status(200).json(addedparticipant);
        },

        removeParticipant: (req: Request, res: Response) => {
            let exitingParticipant = JSON.parse(req.body);
            participantList.remove(exitingParticipant);
            res.status(200).json({ message: 'Rmoved Participant!' });
        },

        getParticipantList: (req: Request, res: Response) => {
            let newParticipantList = participantList.getList();
            res.status(200).json(newParticipantList);
        },
    };
}
