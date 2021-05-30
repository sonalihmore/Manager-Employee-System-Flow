import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { Employee } from '../_models/employee';
import{employeeList} from '../_models/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  employeeList: Employee[] = employeeList;

  constructor(
      private router: Router,
      private http: HttpClient
  ) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
      return this.userSubject.value;
  }

  login(username, password) {

      return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
          .pipe(map(user => {
              localStorage.setItem('user', JSON.stringify(user));
              localStorage.setItem('Employees', JSON.stringify(this.employeeList));
              this.userSubject.next(user);
              return user;
          }));
  }

  logout() {
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/login']);
  }
  register(user: User) {
      return this.http.post(`${environment.apiUrl}/users/register`, user);
  }
}
