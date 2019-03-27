import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TestService {

  
  
  constructor() { }

 

  printName():string{
    return "varun";
  }
}

