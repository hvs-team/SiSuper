import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { Data } from '../../providers/data';
import { OnboardingPage } from '../onboarding/onboarding';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  nama:any;
  email:any;
  nomor:any;
  alamat:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public alertCtrl: AlertController) {

     this.data.getData().then((data) =>
    {
      this.nama = data.nama_user;
      this.email = data.email_user;
      this.nomor = data.telepon_user;
      this.alamat = data.alamat_user;
      console.log(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editProfil(){
    this.navCtrl.push(EditProfilePage);
  }

  logOut(){

    let confirm = this.alertCtrl.create({
      title: 'Anda Yakin?',
      message: 'Seluruh data yang belum tersimpan akan hilang.',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Keluar',
          handler: () => {
            console.log('Agree clicked');
            this.data.logout();  //apus storage cache local    
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
      confirm.present();
  }

}
