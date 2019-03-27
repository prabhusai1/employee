import { Component, OnInit, Input } from '@angular/core';
import { TestService } from '../test.service';



@Component({
  selector: 'app-employeecomponent',
  templateUrl: './employeecomponent.component.html',
  styleUrls: ['./employeecomponent.component.css']
})


export class EmployeecomponentComponent {

  EmployeeTable = [
    { 'EmployeeName': 'kps', 'Gender': 'Male', 'Department': 'IT' },
    { 'EmployeeName': 'vikky', 'Gender': 'Male', 'Department': 'ECE' },
    { 'EmployeeName': 'kamini', 'Gender': 'Female', 'Department': 'CSE' },
    { 'EmployeeName': 'kamini', 'Gender': 'Female', 'Department': 'CSE' }
  ]



  selectedEmployee: string = 'Total';
  onSelected(selectionEmployeeRadioButton: string): void {
    this.selectedEmployee = selectionEmployeeRadioButton;
  }


 // onESelection($event) {

  //}

name = "";
constructor(private myservice:TestService){}

ngOnInit(){
this.name=this.myservice.printName();
}


getName():string{
  this.myservice.printName();
  return this.name;
}

  getTotalEmployee(): number {
    return this.EmployeeTable.length;
  }

  getMale(): number {
    return this.EmployeeTable.filter(e => e.Gender === "Male").length;
  }
  getFemale(): number {
    return this.EmployeeTable.filter(e => e.Gender === "Female").length;
  }


}
