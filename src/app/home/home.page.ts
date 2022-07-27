import { Component } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public backgroundMode: BackgroundMode) {
    setInterval(() => {
      this.backgroundFunction();
    }, 1000);
  }

  public backgroundFunction() {
    if (this.backgroundMode.isEnabled()) {
      console.log('background mode enabled');
    }
  }
}
