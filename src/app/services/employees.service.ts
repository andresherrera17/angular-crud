import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmployee } from "../interfaces/employee.interface";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees$: Observable<IEmployee[]> = new Observable();

  private employeesCollection: AngularFirestoreCollection<IEmployee>;

  constructor(private firestore: AngularFirestore) {
    this.employeesCollection = firestore.collection<IEmployee>('employees');
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employees$ = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(elem => elem.payload.doc.data() as IEmployee))
    )
  }
}
