import { EmployeeModule } from './employee/employee.module';
import { EmployeeComponent } from './employee/employee/employee.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
 
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
 
// import { SampleService } from './services/sample-service';


@NgModule({
  declarations: [
    
    LayoutComponent,
    HomeComponent,
    NewComponent
     
             
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [NewComponent]
})
export class AppModule { }
