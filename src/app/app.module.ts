import { NgModule } from '@angular/core';
import { ColorsTableModule } from './colors-table/colors-table.module';
import { AppComponent } from './app.component';
import  { ColorsListService } from "./colors-table/service/colors-list.service";

import 'hammerjs';

@NgModule({
  declarations: [AppComponent],
  imports: [ ColorsTableModule],
  providers: [ColorsListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
