import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'users', component: UserComponent }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
