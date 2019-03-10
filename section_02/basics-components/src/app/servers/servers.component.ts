import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers', // app-servers, [app-servers] for divs
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
