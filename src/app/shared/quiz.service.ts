import { Injectable } from '@angular/core';
//
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private QuizesUrl = 'api/quizes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a QuizService message with the QuizService */
  private log(message: string) {
    this.messageService.add(`MessageService: ${message}`);
  }

  /* Old function for mock Quizs
  getQuizes(): Observable<Quiz[]> {
    return of(QuizES);
  }
  */

  /** GET Quizes from the server */
  getQuizes(): Observable<Quiz[]> {
    // TODO: send the message _after_ fetching the Quizes
    this.messageService.add('QuizService: fetched Quizes');

    return this.http.get<Quiz[]>(this.QuizesUrl).pipe(
      tap(Quizes => this.log('fetched Quizes')),
      catchError(this.handleError('getQuizes', []))
    );
  }

  /** GET Quiz by id. Will 404 if id not found */
  getQuiz(id: number): Observable<Quiz> {
    const url = `${this.QuizesUrl}/${id}`;
    return this.http.get<Quiz>(url).pipe(
      tap(_ => this.log(`fetched Quiz id=${id}`)),
      catchError(this.handleError<Quiz>(`getQuiz id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
