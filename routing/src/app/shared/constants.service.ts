import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  GO_TO_PROFILE: string = 'Go to Profile';
  GO_BACK: string = 'Go Back';
  ADMIN: string = 'Administrator';
  CURRENT_USER$: Observable<User[]> = of([
    {
      id: 1,
      userName: '',
      role: this.ADMIN,
    },
  ]);

  constructor() {}
}
