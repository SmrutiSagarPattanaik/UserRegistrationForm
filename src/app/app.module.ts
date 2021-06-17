import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { EmailInputFieldComponent } from './email-input-field/email-input-field.component';
import { TextInputFieldComponent } from './text-input-field/text-input-field.component';
import { NumberInputFieldComponent } from './number-input-field/number-input-field.component';
import { PasswordInputFieldComponent } from './password-input-field/password-input-field.component';
import { DateInputFieldComponent } from './date-input-field/date-input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    EmailInputFieldComponent,
    TextInputFieldComponent,
    NumberInputFieldComponent,
    PasswordInputFieldComponent,
    DateInputFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
