import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    exports: [ RouterModule ]
  ],
  exports: [
    RouterModule 
  ],
  declarations: []
})
export class AppRoutingModule { }
