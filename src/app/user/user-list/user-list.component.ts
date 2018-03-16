import { Component, OnInit } from '@angular/core';

import { User } from './../shared/user.model';
import { UserHeaderComponent } from './../user-header/user-header.component';
import { UserService } from './../shared/user.service';

import { SearchByPipe } from './../shared/search-by.pipe';
import { FilterByStatusPipe } from './../shared/filter-by-status.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getStocks();
  }

  getStocks(): void {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }
}
