import * as moment from 'moment';
import {Component} from "@angular/core";
import {Alert, NavController} from 'ionic-angular';
import {CameraPage} from '../camera/camera';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  cameraPage = CameraPage;

  date:string;
  winner: string;

  constructor(private _navController: NavController) {
    this.date = moment().add("days", 7).format("dd/MM/YYYY");
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

  //The actions goes to CameraPage
  goToCamera(){
    this._navController.push(this.cameraPage);
  }
}
