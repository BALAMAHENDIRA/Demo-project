import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPost } from '../employee-model';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = [] as IPost[];
  constructor(private _dataService: DataService ) { }

  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts() {
    this._dataService.getData("posts").subscribe({
      next: (data) => {
        this.posts = data as IPost[];
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
    this.posts = emp;
  }
   
  
}
