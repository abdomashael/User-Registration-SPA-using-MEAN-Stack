import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  name: string;
  age: string;
  mail: string;



  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser($event: Event) {
    const newUser = {
      username: this.name,
      age: this.age,
      email: this.mail
    };
    this.usersService.addUser(newUser).subscribe((data)=>{
      //return to list users after add new user to db
      this.router.navigateByUrl("")
    });
  }
}
