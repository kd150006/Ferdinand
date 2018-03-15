import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DashboardHeaderComponent,
    DashboardBodyComponent,
    DashboardFooterComponent
  ],
  providers: []
})
export class DashboardModule {}
