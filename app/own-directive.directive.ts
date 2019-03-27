import { Directive, ElementRef, HostListener } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Directive({
  selector: '[appOwnDirective]'
})
export class OwnDirectiveDirective {


  constructor(el:ElementRef) { 
  el.nativeElement.style.backgroundColor="green";
  }

  @HostListener('click')Message(){
    alert("working");
  }
  /* @HostListener('mouseover') doSomething() {
    window.alert('danger');
  }*/

  
  }








  
   





  




