import { Observable, of } from "rxjs";
import { IQuestion } from "../../model/model";

import * as fs from 'fs';

export class QuestionCollection {
  get(language: string): Observable<IQuestion[]> {
    const filePath = language === 'ur' ? 'data/mybody-ur.json' : 'data/mybody-en.json';
    const content = fs.readFileSync(filePath, 'utf8');
    return of(JSON.parse(content));
  }
}