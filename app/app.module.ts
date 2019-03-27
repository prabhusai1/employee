import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeecomponentComponent } from './employeecomponent/employeecomponent.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { OwnDirectiveDirective } from './own-directive.directive';
import {FormsModule} from '@angular/forms';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeecomponentComponent,
    EmpListComponent,
    OwnDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
