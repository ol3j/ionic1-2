// 1. import moment
import * as moment from 'moment';
import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

// 4. We are declaring webView as any to prevent compiler errors.
declare var webView: any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  // 2. declare a field
  date:string;
  
  constructor(private _navController: NavController) {
    // 3. use moment  
    this.date = moment().add("days", 7).format("dd/MM/YYYY");
  }
}
