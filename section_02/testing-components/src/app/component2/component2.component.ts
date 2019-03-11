import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-component2]',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  alert2 = "Warning Alert"
  isHidden : boolean = true;

  constructor() { }
  warningAlert(){
    this.isHidden = !this.isHidden;
    alert('Warning! Failed!');
  }
  ngOnInit() {
  }

}
