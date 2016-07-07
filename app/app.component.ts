import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Panel } from './container';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [Panel, ROUTER_DIRECTIVES],
  precompile: [HomeComponent]
})
export class AppComponent {
  
}