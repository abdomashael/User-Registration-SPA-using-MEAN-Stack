import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  basicURL = "http://localhost:3000/user/"
  id = 0;
  users = [];

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): any {
    return this.httpClient.get(`${this.basicURL}`)
  }

  getUserById(userID): any {
    return this.httpClient.get(`${this.basicURL}${userID}`)
  }

  addUser(user): any {
    return this.httpClient.post(this.basicURL,user);
  }

  deleteUserById(userID: number): any {
    return this.httpClient.delete(`${this.basicURL}${userID}`)
  }

  editUser(userID: any, user: { email: string; username: string; age: string }): any {
    return this.httpClient.patch(`${this.basicURL}${userID}`,user)
  }
}
