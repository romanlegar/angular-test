import { Injectable } from '@angular/core';
import  { ColorsItemModel } from "../models/colors-item.model";
@Injectable({
  providedIn: 'root'
})

export class ColorsListService {
  private arrJSON;
  private arrColorsItem: Array<ColorsItemModel>;
  constructor() {
    this.arrJSON = JSON.parse('{"colorsArray":[{"colorName":"red","hexValue":"#f00"},{"colorName":"green","hexValue":"#0f0"},{"colorName":"blue","hexValue":"#00f"},{"colorName":"cyan","hexValue":"#0ff"},{"colorName":"magenta","hexValue":"#f0f"},{"colorName":"yellow","hexValue":"#ff0"},{"colorName":"black","hexValue":"#000"}]}');
   }

  getColorsItem(): Array<ColorsItemModel> {
    this.arrColorsItem = this.arrJSON.colorsArray.map((el) => {
      return new ColorsItemModel(el.colorName, el.hexValue);
    })
    return this.arrColorsItem;
  }

}
