import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProfileUsahaPage } from '../edit-profile-usaha/edit-profile-usaha';


@Component({
  selector: 'page-profile-usaha',
  templateUrl: 'profile-usaha.html',
})
export class ProfileUsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileUsahaPage');
  }

  editProfil(){
    this.navCtrl.push(EditProfileUsahaPage);
  }

}
