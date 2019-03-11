import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // Add User
  addUser(user:User) {
    return localStorage.setItem('userData', JSON.stringify(user));
  }

  // Get User
  getUser() {
    return JSON.parse(localStorage.getItem('userData'));
  }

}
