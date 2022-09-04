import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    PostComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EmployeeModule { }
