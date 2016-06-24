import * as moment from 'moment';
import {Component, OnInit} from "@angular/core";
// 1. import Toast
import {Toast, Alert, NavController} from 'ionic-angular';
import {CameraPage} from '../camera/camera';
// 2. Add Platform service
import {Platform, PlatformVersion} from 'ionic-angular';
// 7. Import my-platform component
import {MyPlatform} from '../../components/my-platform.component';


@Component({
  templateUrl: 'build/pages/home/home.html',
  // 8. import my-platfrom
  directives: [MyPlatform]
})

export class HomePage {

  constructor(private _navController: NavController, private platform: Platform) {
    this.platform = platform;
  }

  // 3. check platform
  checkPlatform() {
    let res = "android"
    // 4. manualy check platform
    if (this.platform.is("ios")) {
      res = "ios";
    }

    // 5. create toast
    let toast = Toast.create({
      message: res,
      duration: 3000
    });
    // 6. display toast
    this._navController.present(toast);
  }
}
