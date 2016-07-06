import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: 'app/container/panel.html'
})
export class Panel {
  @Input() title: string;
}