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

  deleteUserById(id: number): void {
    const idx = this.users.indexOf(this.getUserById(id));
    this.users.splice(idx, 1);
  }

  editUser(userID: any, user: { email: string; username: string; age: string }): any {

    return this.httpClient.patch(`${this.basicURL}${userID}`,user)
    // const idx = this.users.indexOf(this.getUserById(id));
    // this.users[idx].id = id;
    // this.users[idx].name = user.name;
    // this.users[idx].age = user.age;
    // this.users[idx].mail = user.mail;
  }
}
