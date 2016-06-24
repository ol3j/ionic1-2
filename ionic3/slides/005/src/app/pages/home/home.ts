import * as moment from 'moment';
import {Component, OnInit} from "@angular/core";
import {Alert, NavController} from 'ionic-angular';
import {CameraPage} from '../camera/camera';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  //define camera page as a field
  cameraPage = CameraPage;

  date: string;
  winner: string;

  constructor(private _navController: NavController) {
    this.date = moment().add("days", 7).format("dd/MM/YYYY");
  }

  //Angular2 lifecycles
  ngOnInit() {
    console.log("ng on init");
  }

  //Runs when the page has loaded. This event only happens once per page being created and added to the DOM.
  ionViewLoaded() {
    console.log("I'm loaded");
  }

  //Runs when the page is about to leave and no longer be the active page.
  ionViewWillLeave() {
    console.log("I'm about to leave :(");
  }

  ionViewWillEnter() {
    console.log("will enter");
  }
  //Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
  ionViewDidEnter() {
    console.log("did enter");

  }

  doPrompt() {
    let prompt = Alert.create({
      title: 'The winner Euro 2016',
      message: "Enter the winner",
      inputs: [
        {
          name: 'winner',
          placeholder: 'The Winner is...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.winner = data.winner;
          }
        }
      ]
    });

    this._navController.present(prompt);
  }

  goToCamera() {
    this._navController.push(this.cameraPage);
  }
}
