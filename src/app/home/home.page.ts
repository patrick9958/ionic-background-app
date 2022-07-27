import { Component } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public backgroundMode: BackgroundMode) {
    let cnt = 0;
    setInterval(() => {
      this.backgroundFunction(cnt);
      cnt += 1;
    }, 1000);
  }

  public backgroundFunction(cnt: number) {
    if (this.backgroundMode.isEnabled()) {
      console.log('background mode enabled ' + cnt);
    }
  }
}
