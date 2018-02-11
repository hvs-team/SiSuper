import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  nama:any;
  email:any;
  nomorTelepon:any;
  alamat:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data: Data) {

    this.data.getData().then((data) =>
    {
      this.nama = data.nama_user;
      this.email = data.email_user;
      this.nomorTelepon = data.telepon_user;
      this.alamat = data.alamat_user;
      console.log(data);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  editProfile(){
    this.navCtrl.pop();
  }

}
