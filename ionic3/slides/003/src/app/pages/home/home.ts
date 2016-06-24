import * as moment from 'moment';
import {Component} from "@angular/core";
import {Alert, NavController} from 'ionic-angular';
//Add camera page 
import {CameraPage} from '../camera/camera';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  //define camera page as a field
  cameraPage = CameraPage;

  date:string;
  winner: string;

  constructor(private _navController: NavController) {
    this.date = moment().add("days", 7).format("dd/MM/YYYY");
  }

  //The actions goes to CameraPage
  goToCamera(){
    this._navController.push(this.cameraPage);
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
}
