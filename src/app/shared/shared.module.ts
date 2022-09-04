import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { GridComponent } from './grid/grid.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    GridComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule

  ],
  exports: [GridComponent, SearchComponent]
})
export class SharedModule { }
