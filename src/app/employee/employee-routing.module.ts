import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'post', component: PostComponent },
  { path: 'demo', component: DemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
