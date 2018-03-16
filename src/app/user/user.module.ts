import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserHeaderComponent } from './user-header/user-header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './shared/user.service';
import { UserRoutingModule } from './user-routing.module';
import { SearchByPipe } from './shared/search-by.pipe';
import { FilterByStatusPipe } from './shared/filter-by-status.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, UserRoutingModule],
  declarations: [
    UserHeaderComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    SearchByPipe,
    FilterByStatusPipe
  ],
  providers: [UserService]
})
export class UserModule {}
