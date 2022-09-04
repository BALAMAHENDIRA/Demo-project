import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IUser } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = [] as IUser[];
  
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.loadsPost();
  }

  loadsPost() {
    this._dataService.getUser("api/Trainee").subscribe({
      next: (out) => {
        this.users = out as IUser[];
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    })
  }

  selected(emp: any) {
    this.users = emp;
  }
}
