import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  register(form: NgForm) {
    console.log(form.value);
    
  }
}
