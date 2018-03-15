import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Location } from '@angular/common';

import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService, private location: Location) {}

  ngOnInit() {
  this.initUser();
}
  initUser(): void {
    this.user = new User();
    this.user.status = 'A';
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.isAdmin = false;
    this.user.login = '';
    this.user.password = '';
  }

  save(): void {
    this.userService.createUser(this.user).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
