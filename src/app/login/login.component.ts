import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
if (this.username === 'admin' && this.password === 'admin@123') {
       this.router.navigate(['homepage']);
       this.userService.token = '12345';
} else {
  alert('Enter Correct Data');
}
  }
}

