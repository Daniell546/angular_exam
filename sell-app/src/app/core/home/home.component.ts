import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void {
    this.apiService.getProperty().subscribe((prop) => {
      console.log({prop});
    })
  }
}
