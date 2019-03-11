import { Component } from '@angular/core';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  .alert-success{
      font-family: Arial,sans-serif;
      font-size: 100px;
      line-height: 1;
      font-weight: bold;
    }
  `]
})
export class Component1Component{

  alert1="Success Alert"
  isHidden : boolean = true;
  constructor(private alerts: AlertsService) { }

  sucessAlert(){
    this.isHidden = !this.isHidden;
    alert('Configurations! Success!');
  }
}