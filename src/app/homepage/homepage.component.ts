import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userService: UserService) { }
selectedUser = [''];
Users: any;
onEdit = false;
userForm = new FormGroup({
name: new FormControl('', Validators.required),
username: new FormControl(),
email: new FormControl(),
website: new FormControl()
});
  ngOnInit() {
  this.userService.getUser().subscribe(users => {
    console.log(users);
    this.Users = users;
  });
  }
  Getuser(user): void {
    console.log(user);
    this.selectedUser = user;
  }
  onDelete(id , name) {
    console.log(id);
    if (confirm('Are you sure you want to delete' + ' ' + name )) {
      this.userService.onDelete(id).subscribe(user => {
        this.Users = this.Users.filter(User => User.id !== id);
          this.selectedUser = [''];
        });
    }

  }
  onUpdate(id) {
    this.onEdit = !this.onEdit;
    console.log(this.userForm.value);
    this.userService.onUpdate(this.userForm.value, id).subscribe(res => {
      console.log(res);
    });
  }
}
