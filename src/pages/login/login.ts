import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ProdukkuPage } from '../produkku/produkku';
import { ListPage } from '../list/list';
import { ListUsahaPage } from '../list-usaha/list-usaha';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitted = false;
  lihat = true;
  status = "password";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  daftar(){
    this.navCtrl.setRoot(SignupPage);
  }

  skip(){
    this.navCtrl.setRoot(ProdukkuPage);
  }

  masuk(){
    this.navCtrl.setRoot(ListUsahaPage)
  }
}
