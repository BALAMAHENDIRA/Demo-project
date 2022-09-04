import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [] as IEmployee[];
  employee = {} as IEmployee;
  isEdit = false;

 
  constructor() { }

  ngOnInit(): void {
    this.employees =[
      { empNumber: 101, empName: 'Sathesh', empSalary: 65000 },
      { empNumber: 102, empName: 'Anil', empSalary: 45000 },
      { empNumber: 103, empName: 'Krishna', empSalary: 85000 },
      { empNumber: 104, empName: 'Prasad', empSalary: 55000 },
      { empNumber: 105, empName: 'Raju', empSalary: 55000 },
      { empNumber: 106, empName: 'Kumar', empSalary: 58000 }
    ];
  }

  sortData(param: string) {
    this.employees = this.employees.sort((a: any, b: any) => {
      if (a[param] < b[param])
        return -1;
      else if (a[param] > b[param])
        return 1;
      else
        return 0;
    });
  }

   addEmployee(f: NgForm) {
    if (this.isEdit) {
           //modify logic
           alert("Record Updated");
           this.isEdit = false;
       }
       else{
        this.employees.push(this.employee);
        alert("Record Added"); 
       }
      this.employee = {} as IEmployee;
      f.resetForm();    
  }


  deleteEmp(item: number) {
    if (confirm("Do you want to Delete?")) 
     {
      //delete logic
     }  
    }
  

  // addEmployee(f: NgForm) {
  //   if (this.isEdit) {
  //     //modify logic
  //     alert("Record Updated");
  //     this.isEdit = false;
  //   }
  //   else {
  //     this.employees.push(this.employee);
  //     alert("Record Added");
  //   }
  //   this.employee = {} as IEmployee;
  //   f.resetForm();
  // }

  editEmp(item: IEmployee) {
    this.employee = JSON.parse(JSON.stringify(item));
    this.isEdit = true;
  }

  }
