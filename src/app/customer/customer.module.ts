import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CustomerComponent,
    UserComponent,
     
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CustomerModule { }
