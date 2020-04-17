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
    console.log(user)
    this.httpClient.post(this.basicURL,JSON.stringify(user))
  }

  deleteUserById(id: number): void {
    const idx = this.users.indexOf(this.getUserById(id));
    this.users.splice(idx, 1);
  }

  editUser(id: number, user: { mail: string; name: string; age: string }): void {
    const idx = this.users.indexOf(this.getUserById(id));
    this.users[idx].id = id;
    this.users[idx].name = user.name;
    this.users[idx].age = user.age;
    this.users[idx].mail = user.mail;
  }
}
