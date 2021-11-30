import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';


@NgModule({
  declarations: [ListModule],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
