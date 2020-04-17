import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  name: string;
  age: string;
  mail: string;


  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  addUser($event: Event) {
    const newUser = {
      username: this.name,
      age: this.age,
      email: this.mail
    };
    this.usersService.addUser(newUser);
  }
}
