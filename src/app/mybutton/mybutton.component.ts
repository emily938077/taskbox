import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-button',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.css']
})
export class myButtonComponent {

  @Input() primary = false;
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label: any = 'button';
  @Input() disable = false;

  @Output() onDoubleClick = new EventEmitter<Event>();
  @Output() onClick = new EventEmitter<Event>();

  constructor() { }

  public get classes(): string[] {
    // 多個css設定可以疊加
    const mode = this.primary ? 'primary' : 'secondary';
    const able = this.disable ? 'disable' : '';
    return ['storybook-button', mode, this.size, able]
  }

  onCliick(id:any){
    this.onClick.emit(id);
    switch(this.size){
      case 'small':
        this.size = 'medium';
        break;
      case 'medium':
        this.size = 'large';
        break;
      case 'large':
        this.size = 'small';
        break;
    }
    console.log('press');
  }

  onDblClick(id:any){
    // this.disable = !this.disable;
    this.primary = !this.primary;
    this.onDoubleClick.emit(id);
  }
}
