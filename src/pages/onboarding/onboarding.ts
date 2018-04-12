import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController) {

      this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }

  Masuk(){
    this.navCtrl.setRoot(LoginPage);
  }

  Daftar(){
    this.navCtrl.setRoot(SignupPage);
  }

}
