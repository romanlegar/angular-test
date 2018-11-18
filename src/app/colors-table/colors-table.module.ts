import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsListComponent } from './components/colors-list/colors-list.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, BrowserModule,  MatTableModule, MatPaginatorModule, MatSortModule
  ],
  declarations: [ColorsListComponent],
  exports: [
    ColorsListComponent, BrowserAnimationsModule, BrowserModule, MatTableModule, MatPaginatorModule, MatSortModule
  ]
})
export class ColorsTableModule { }
