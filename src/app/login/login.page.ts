import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../providers/user-data';




@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    var usernames = ["employe", "manager", "rh"]
    if (!usernames.includes(this.login.username)){
      return
    }
    if (form.valid ) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/demands');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
