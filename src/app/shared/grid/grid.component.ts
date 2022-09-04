import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridColumns = [] as any[];
  gridData = [] as any[];
  tempData = [] as any[];
  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    this._searchService.searchKey.subscribe(data => {
      this.filterData(data);
  });
  }
  @Input("dataList")
  public set value(dataList: any) {
    if (dataList.length) {
      this.gridColumns = Object.keys(dataList[0]);
      this.tempData = dataList;
      this.gridData = this.tempData;
    }
  }
  
  sortData(param: string) {
    this.gridData = this.gridData.sort((a: any, b: any) => {
      if (a[param] < b[param])
        return -1;
      else if (a[param] > b[param])
        return 1;
      else
        return 0;
    });
  }

  filterData(key: string) {
    this.gridData = this.tempData.filter((ele: any) => {
      if (ele.title.indexOf(key) != -1) {
        return ele;
      }
    });
  }
  
  @Output()
  selectedRow: EventEmitter<any> = new EventEmitter<any>();
}
