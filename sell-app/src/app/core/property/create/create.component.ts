import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_PROTOCOLS } from 'src/app/shared/constants';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  appProtocols = DEFAULT_PROTOCOLS;
  create(form:NgForm) {

    // if(form.invalid) return;

    console.log(form.value);
    
  }
}
