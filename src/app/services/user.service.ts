import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }
  private userUrl : 'api/users';
  // Log function for Console
  private log(log: string) {
    console.info(log);
  }
  // Handle Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
    
  }
  //Return all Users
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.userUrl).pipe(
    tap(_ => this.log('fetched Users')),
    catchError(this.handleError('get Users', []))
  );
}
// Add user 
addUser(user: User): Observable<User> {
  const url = `${this.userUrl}`;
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  return this.http.post<User>(url, user, httpOptions).pipe(
    tap(_ => this.log(`ajouter user id= ${user.id}`)),
    catchError((this.handleError<any>('ajouter user')))
  );
}
}
