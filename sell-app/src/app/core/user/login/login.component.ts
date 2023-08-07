import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  login(form:NgForm) {

    // if(form.invalid) return;

    console.log(form.value);
    
  }
}
