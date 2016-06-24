// 1. My platform component
import { Component } from '@angular/core';
// 2. import platform service
import {Platform, PlatformVersion} from 'ionic-angular';

@Component({
  selector: 'my-platform',
  template: `
          <p><ion-icon name="logo-android" showWhen="android"></ion-icon>
           {{platforms}}</p>    
  `
})

export class MyPlatform {

  platforms: Array<string>;

  constructor(platform: Platform) {
    // 3.  get platforms
    this.platforms = platform.platforms();
    // 4. get platform's version
    console.log(platform.version());
  }
}