import { Injectable } from '@angular/core';
import { from, map, Observable, ReplaySubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { info, User as CAPUser } from '@odata/user-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for user
   *
   * @param value
   */
  set user(value: User) {
    // Store the value
    this._user.next(value);
  }

  get user$(): Observable<User> {
    return this._user.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the current logged in user data
   */
  get(): Observable<User> {
    // TODO error handling
    return from(
      info({})
        .execute({ url: environment.baseUrl }) // TODO use destination on prod?
    )
      .pipe(
        map<CAPUser, User>(user => ({
          id: user.user,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          avatar: null,
          status: null
        })),
        tap((user) => {
          this._user.next(user);
        })
      );
  }

  /**
   * Update the user
   *
   * @param user
   */
  update(user: User): Observable<any> {
    // TODO correct endpoint
    return this._httpClient.patch<User>('api/common/user', { user })
      .pipe(
        map((response) => {
          this._user.next(response);
        })
      );
  }
}
