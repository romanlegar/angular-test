import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import  { ColorsItemModel } from "../../models/colors-item.model";
import { ColorsListService } from "../../service/colors-list.service";
import {Sort} from '@angular/material';
@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.scss']
})
export class ColorsListComponent {
  private arrColors: Array<ColorsItemModel>
  private sortedData: Array<ColorsItemModel>
    constructor(
      private ColorsListService: ColorsListService
     ) {
      this.arrColors = ColorsListService.getColorsItem()
      this.sortedData = this.arrColors.slice();
    }
    sortData(sort: Sort) {
      const data = this.arrColors.slice();
      if (!sort.active || sort.direction === ''){
        this.sortedData = data;
        return;
      }
      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name': return compare(a.name, b.name, isAsc);
          case 'value': return compare(a.value, b.value, isAsc);
          default: return 0;
        }
      });
    }
  }

  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
