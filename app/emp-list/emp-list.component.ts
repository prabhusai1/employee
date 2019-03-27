import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }

  @Input()
  Total: number;

  @Input()
  Male: number;

  @Input()
  Female: number;



  selectedEmployee: String = 'Total';

  @Output()
  OnSelectionOfRadioButton: EventEmitter<String> = new EventEmitter<String>();



  OnSelectionRadioButton() {
    this.OnSelectionOfRadioButton.emit(this.selectedEmployee);
  }

}
