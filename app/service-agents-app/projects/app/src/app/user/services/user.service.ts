import { Injectable } from '@angular/core';
import { map, Observable, of, ReplaySubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

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
    // TODO add http call
    return of({
      id: '1',
      status: 'idk',
      name: 'Fabian Küng',
      email: 'fabian.kueng@inpeek.ch'
    })
      .pipe(
        tap((user) => {
          this._user.next(user);
        })
      );
    // return this._httpClient.get<User>('api/common/user')
    //   .pipe(
    //     tap((user) => {
    //       this._user.next(user);
    //     })
    //   );
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
