import { Quiz } from './../_models/quiz-detail/quiz';
import { Question } from './../_models/question/question';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json',
    // 'Authorization': 'my-auth-token',
    // 'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',

  })
};

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) { }
  getQuestionsByQuizId(id: number): Observable<Question[]> {
    const getUrl = 'http://localhost:3000/api/test';
    const questionArray: Question[] = [];
    const url = `${getUrl}/${id}`;
    const res = this.http.get(url).pipe(catchError(this.handleError));
    res.subscribe((data: any) => {
      const JSONarray = JSON.parse(data._body);
      JSONarray.forEach((element: { questionContent: string; optionA: string; optionB: string; optionC: string; optionD: string; }) => {
        questionArray.push(new Question(element.questionContent, element.optionA, element.optionB, element.optionC, element.optionD));
      });
    });
    return of(questionArray);
  }
  getAllQuizDetail(): Observable<Quiz[]> {
    const getUrl = 'http://localhost:3000/api/testdetail';
    const quizArray: Quiz[] = [];
    const res = this.http.get(getUrl).pipe(
      catchError(this.handleError)
    );
    res.subscribe((data: any) => {
      const JSONarray = JSON.parse(data._body);
      JSONarray.forEach((element: {
        quizNumber: number;
        language: string;
        catalogy: string;
        questionQuantity: number
      }) => {
          quizArray.push(new Quiz(element.quizNumber, element.catalogy, element.language, element.questionQuantity));
      });
    });
      
    return of(quizArray);
  }
  private handleError(error: Response) {
    return Observable.throw(error);
  }
}
