import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  canEdit: boolean;
  showMore: boolean;
  btnShowLabel: string;
  btnLockLabel: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.canEdit = false;
    this.btnLockLabel = 'Unlock';
    this.showMore = false;
    this.btnShowLabel = 'More';
    this.getUser();
  }

  onChangeActive(): void {
    if (this.user.status === 'A') {
      this.user.status = 'I';
    } else {
      this.user.status = 'A';
    }
  }

  doShowMore(): void {
    if (this.showMore) {
      this.showMore = false;
      this.btnShowLabel = 'More';
    } else {
      this.showMore = true;
      this.btnShowLabel = 'Less';
    }
  }

  doEdit(): void {
    if (this.canEdit) {
      this.canEdit = false;
      this.btnLockLabel = 'Unlock';
    } else {
      this.canEdit = true;
      this.btnLockLabel = 'Lock';
    }
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }
  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.deleteUser(id).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
