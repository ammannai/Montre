import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Montre } from '../montre';
import {tap , catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor( private http : HttpClient) { }
  
  private montreUrl = 'http://localhost:3000/';

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
//Return all montres
getMontres() {
  const  url= `${this.montreUrl}api/allwatches`
    return this.http.get<{watches: any, message:String}>(url).pipe(
      tap(_ => this.log('fetched montre')),
      catchError(this.handleError('get Montres', []))
    );
  }
// Delete Montre
deleteMontre(montre: Montre): Observable<Montre> {
  const url = `${this.montreUrl}api/watches/${montre._id}`;
  return this.http.delete<Montre>(url).pipe(
    tap(_ => this.log(`delete montre id= ${montre._id}`)),
    catchError((this.handleError<any>('Delete montre')))
  );
}
// Add Montre
addMontre(montre: Montre): Observable<Montre> {
  const url = `${this.montreUrl}api/montres`;
  console.log("URL in service",url);
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  return this.http.post<Montre>(url, montre, httpOptions).pipe(
    tap(_ => this.log(`ajouter montre id= ${montre._id}`)),
    catchError((this.handleError<any>('ajouter montre')))
  );
}
 // Display Montre by Id
 displayMontre(id: string): Observable<Montre> {
  const url = `${this.montreUrl}api/watches/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  return this.http.get<Montre>(url, httpOptions).pipe(
    tap(_ => this.log(`display montre id= ${id}`)),
    catchError((this.handleError<any>('display montre')))
  );
}
 // Update Montre by Id
 updateMontre(montre: Montre): Observable<Montre> {
  const url = `${this.montreUrl}api/watches/${montre._id}`;
  return this.http.put(url, montre).pipe(
    tap(_ => this.log(`updated montre id=${montre._id}`)),
    catchError(this.handleError<any>('updated montre'))
  );
}
 // Search Montre by Id
 searchMontre(term: string): Observable <Montre[]> {
  if (!term.trim()){
   return of([]);
 }
 return this.http.get<Montre[]>(`${this.montreUrl}/?marque=${term}`).pipe(
 tap(_ => this.log(`found montres matching "${term}"`)),
 catchError(this.handleError<Montre []>('search montres', []))
 );
}
}