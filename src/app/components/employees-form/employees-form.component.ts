import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {

  employee = {} as IEmployee;
  employeeForm: FormGroup = new FormGroup({});

  private isEmail = /\S+@\S+\.\S+/;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = { ...navigation?.extras?.state } as IEmployee;
    this.initForm();
  }

  ngOnInit(): void {
    // if (this.employee) {
    //   this.employeeForm.patchValue(this.employee);
    // }
  }

  isValidField(field: string): string {
    const validatedField = this.employeeForm.get(field);
    return (!validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : ''
  }

  private initForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
    })
  }

  onSave() {
    console.log(this.employeeForm);
  }
}
