import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {

  constructor() { }

  @Input() label1?: string;
  @Input() label2?: string;
  @Input() size1: 'small' | 'medium' | 'large' = 'medium';
  @Input() size2: 'small' | 'medium' | 'large' = 'medium';
  @Input() backgroundColor?: string;
  primary = true;
  @Output() onChange = new EventEmitter<Event>();
  onClean(input: any){
    input.value = "";
    // const state = btother.disable ? 'disable' : 'able';
    // console.log(btother+state);
    this.onChange.emit();
  }
  // onChangePmr(bt: any){
  //   this.primary = !this.primary;
  //   // console.log(bt+'disable');
  //   this.onChange.emit(bt.label);
  // }
}
