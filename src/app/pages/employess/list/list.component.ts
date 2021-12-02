import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employees$ = this._serviceEmployees.employees$;

  constructor(private _serviceEmployees: EmployeesService) { }

  ngOnInit(): void {
  }

}
