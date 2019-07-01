import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AuthRemember } from './auth-remember.component';

@NgModule({
  declarations: [
    AuthFormComponent, 
    AuthRemember
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent, 
    AuthRemember
  ]
})
export class AuthFormModule {}