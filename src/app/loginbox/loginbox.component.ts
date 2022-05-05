import { Component, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { Validators, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent {

  constructor() { }
  @Input() cleanbox: 'normal' | 'clean' = 'normal';
  type: 'phone' | 'email' = 'phone';
  text?: string;    //placeholder
  message?: any; //錯誤訊息
  inputvalue?: string;  //input value

  // ngOnChanges() {
  //   if(this.cleanbox){
  //     this.inputvalue = '';
  //     this.cleanbox = false;
  //   }
  // }

  onKey(value:string){

    this.inputvalue = value;
    if (this.type == 'phone'){
      const control = new FormControl(value, Validators.pattern('^09[0-9]{8}$'))
      this.message = control.errors;
      if(this.message || value === ''){
        this.message = '請輸入正確電話格式';
      }
      else{
        this.message = 'pass!';
      }
    }
    // email \b[\w\.-]+@[\w\.-]+\.\w{2,4}\b
    else if (this.type == 'email'){
      if (/\@/i.test(value)){   //有!  看有沒有@
        this.message = 'pass!';
      }
      else{   //沒!
        this.message = 'please key in your email.';
      }
    }
  }
  public get gettype(): string{
    return this.type;
  }
  public get gettext(): string{
    if (this.type == 'phone'){
      return '0912345678';
    }
    else if(this.type == 'email'){
      return 'aaa@mail.com';
    }
  }

  public get getcleanbox(): string{

    if(this.cleanbox=='clean'){
      this.inputvalue = '';
      // return 'true';
    }
    return this.cleanbox
  }

  public get getmessage(): string {
    return this.message;
  }
  public get getinputvalue(): string {
    return this.inputvalue;
  }

//   /**
//  * 綁定在帳號欄位上，當使用者改變帳號時會觸發此函式
//  *
//  * @param {string} account
//  * @param {ValidationErrors} errors
//  */
//   accountValueChange(inputvalue: string, errors: ValidationErrors | null): void {
//     this.inputvalue = inputvalue;
//     this.validationCheck(errors, 'account');
//   }

//   private validationCheck(
//     errors: ValidationErrors | null,
//     fieldName: 'account' | 'password'
//   ): void {
//     let errorMessage: string;
//     if (!errors) {
//       errorMessage = '';
//     } else if (errors.required) {
//       errorMessage = '此欄位必填';
//     } else if (errors.pattern) {
//       errorMessage = '格式有誤，請重新輸入';
//     } else if (errors.minlength) {
//       errorMessage = '密碼長度最短不得低於8碼';
//     }
//     this.message = errorMessage;
//     ;
//   }

}
