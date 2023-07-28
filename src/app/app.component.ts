import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sid-unit-testing';
  btnText = 'Subscribe';
  isSubscribed = false;

  marks = [95, 88, 75, 65, 55, 36, 30, 18];

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = 'Subscribed';
    }, 3000);
  }
}
