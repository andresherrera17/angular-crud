import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from "../interfaces/employee.interface";
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees$: Observable<DocumentData[]> = new Observable<DocumentData[]>();


  constructor(firestore: Firestore) {
    const collectionEmployees = collection(firestore, 'employees');
    this.employees$ = collectionData(collectionEmployees);
  }

}
