import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './pages/employess/details/details.component';
import { EditComponent } from './pages/employess/edit/edit.component';
import { ListComponent } from './pages/employess/list/list.component';
import { NewComponent } from './pages/employess/new/new.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EditComponent,
    ListComponent,
    NewComponent,
    EmployeesFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
