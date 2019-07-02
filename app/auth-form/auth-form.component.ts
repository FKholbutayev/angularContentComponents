import { Component, Output, EventEmitter, ContentChild, AfterContentInit, Input, OnInit, ViewChild, AfterViewInit, TemplateRef, ElementRef, Renderer, asNativeElements } from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component'
import { AuthMessageComponent } from './auth-message.component'

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message
          [style.display]="(showMessage ? 'inherit':'none')"
        ></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage:boolean
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent
  @ContentChild(AuthRememberComponent) remember:AuthRememberComponent
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ViewChild('email') email:ElementRef

  constructor(private renderer:Renderer) {}

  ngAfterViewInit(): void {
    this.renderer
    .setElementAttribute(this.email.nativeElement, 'placeholder', 'Enter email')
  }

  ngAfterContentInit(): void {
    if(this.remember) {
      this.remember.checked.subscribe((checked:boolean) => {
        this.showMessage = checked
      })
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }



}
