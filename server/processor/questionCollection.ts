import { Observable, of } from "rxjs";
import { IQuestion } from "../../model/model";

import * as fs from 'fs';

export class QuestionCollection {
  get(language: string): Observable<IQuestion[]> {
    const filePath = language === 'ur' ? 
      'data/mybody-selected-ur.json' : 
      'data/mybody-selected-en.json';
    const content = fs.readFileSync(filePath, 'utf8');
    return of(JSON.parse(content));
  }
}