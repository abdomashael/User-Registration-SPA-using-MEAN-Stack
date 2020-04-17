import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:any;

  constructor(private router: ActivatedRoute, private usersService: UsersService,private navRouter:Router) {
  }

  ngOnInit(): void {
    this.usersService.getUserById(this.router.snapshot.paramMap.get('id'))
        .subscribe((data)=>{
          console.log(data)
          this.user = data
        });
  }

  deleteUser($event: MouseEvent) {
    this.usersService.deleteUserById(this.user._id).subscribe((data)=>{
        console.log(data)
        this.navRouter.navigateByUrl("")
    });
  }
}
