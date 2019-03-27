import { OwnDirectiveDirective } from './own-directive.directive';
import { ElementFinder } from 'protractor';
import { ElementRef } from '@angular/core';

describe('OwnDirectiveDirective', () => {
  it('should create an instance', () => {
    
    
    const directive = new OwnDirectiveDirective(el:ElementRef);
    expect(directive).toBeTruthy();
  });
});
