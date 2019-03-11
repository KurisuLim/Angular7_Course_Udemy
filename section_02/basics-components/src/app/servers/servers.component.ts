import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', <app-servers></app-servers>
  // selector: '[app-servers]', <div app-servers></div>
  selector: '.app-servers', // <div class="app-servers"></div>
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
