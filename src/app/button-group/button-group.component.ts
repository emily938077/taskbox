import { Component, EventEmitter, Input, Output } from '@angular/core';
import { myButtonComponent } from '../mybutton/mybutton.component';
import { LoginboxComponent } from '../loginbox/loginbox.component';
import { Validators, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
  constructor() { }
  @Input() label1?: string;
  @Input() label2?: string;
  size1: 'small' | 'medium' | 'large' = 'medium';
  size2: 'small' | 'medium' | 'large' = 'medium';
  backgroundColor?: string;
  primary = true;
  inputboxvalue?: string;
  cleanvalue: 'normal' | 'clean' = 'normal';

  onLock(){
    this.cleanvalue = 'normal';
  }
  onClean(){
    this.cleanvalue = 'clean';
  }
  getValue(value: string){
    this.inputboxvalue = value;
  }
}
