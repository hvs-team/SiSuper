import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the EditProfileUsahaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-profile-usaha',
  templateUrl: 'edit-profile-usaha.html',
})
export class EditProfileUsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfileUsahaPage');
  }

  editProfileUsaha(){
  this.navCtrl.push(ProfilePage);
}

}
