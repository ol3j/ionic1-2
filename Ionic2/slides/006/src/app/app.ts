//import ViewChild
import {Component, ViewChild} from '@angular/core';
//import MenuController and Nav
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
  //use template with menu but from build folder
   templateUrl: 'build/app.html'
})
export class MyApp {
  //use ViewChild http://learnangular2.com/viewChild/
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  //add array to stores pages
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, private menu: MenuController) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });

     // set our app's pages
    this.pages = [
      { title: 'HomePage', component: HomePage },
      { title: 'Camera', component: HomePage }
    ];
  }

   openPage(page) {
    console.log('go to page ' + page.title);
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
