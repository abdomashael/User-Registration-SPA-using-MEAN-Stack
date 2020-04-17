import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  name: string;
  age: string;
  mail: string;
  id: number;

  constructor(private router: ActivatedRoute, private usersService: UsersService,private navRouter:Router) {
  }

  ngOnInit(): void {
    this.usersService.getUserById(this.router.snapshot.paramMap.get('id')).
        subscribe((data)=>{
      this.name = data.username;
      this.age = data.age;
      this.mail = data.email;
      this.id = data._id;
    })




  }

  editUser($event: MouseEvent): void {
    const user = {
      username: this.name,
      age: this.age,
      email: this.mail
    };

    this.usersService.editUser(this.id, user).subscribe(()=>{
      this.navRouter.navigateByUrl("")
    });
  }
}
