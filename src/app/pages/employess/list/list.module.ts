import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeesFormModule } from 'src/app/components/employees-form/employees-form.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    EmployeesFormModule
  ]
})
export class ListModule { }
