import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../user';
import { tap, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient,
    private router : Router) { }
  private userUrl :string = 'http://localhost:3000/api/user/';
  private token : string ;
  private  isUserAuthenticated = false ;
  private authStatusListener = new Subject<boolean>();
  private tokenTimer : any ;
  
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
  console.log('URL', this.userUrl);
  
  const url = `${this.userUrl}signup`;
  console.log('url in service',url);
  
  return this.http.post<User>(url, user).pipe(
    tap(_ => this.log(`ajouter user id= ${user._id}`)),
    catchError((this.handleError<any>('ajouter user')))
  );
}
login(user : any){
  console.log("Here in login service",user);
  const url= `${this.userUrl}signin`; 
console.log("my url", url);

this.http.post<{token : string , expiresIn : number}>(url, user).subscribe(
  res => {
  console.log("res",res);
  const token = res.token;
  this.token = token;
  if(token){
    const expiresInDuration = res.expiresIn;
    this.setAuthTimer(expiresInDuration);
    this.isUserAuthenticated = true;
    this.authStatusListener.next(true);
    const now = new Date();
    const expirationDate = new Date(now.getTime() + expiresInDuration *1000 );
    this.saveAuthData(token, expirationDate);
    this.router.navigate(['/admin']);
  }

  }
);

}
getToken() {
  return this.token;
}

getAuthStatusListener() {
  return this.authStatusListener.asObservable();
}

isUserAuth() {
  return this.isUserAuthenticated;
}
autoAuthUser() {
  const token = localStorage.getItem('token');
  const expirationDate = localStorage.getItem('expiration');
  if (!token || !expirationDate) {
    return;
  }
  const now = new Date();
  const expiresIn = new Date(expirationDate).getTime() - now.getTime();

  console.log("expiresIn", expiresIn);


  if (expiresIn) {
    this.token = token;
    this.isUserAuthenticated = true;
    this.setAuthTimer(expiresIn / 1000);
    this.authStatusListener.next(true);
  }
}
logout() {
  this.clearAuthData();
  this.isUserAuthenticated = false;
  this.authStatusListener.next(false);
  this.router.navigate(['/']);
  clearTimeout(this.tokenTimer);

}
private setAuthTimer(duration: number) {
  console.log('Set Timer', duration);

  this.tokenTimer = setTimeout(() => {
    this.logout();
  }, duration * 1000);
}
private saveAuthData(token: string, expirationDate: Date) {
  localStorage.setItem('token', 'Bearer ' +token);
  localStorage.setItem('expiration', expirationDate.toISOString());
}
private clearAuthData() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
}

}
