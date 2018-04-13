import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EditProfileUsahaPage } from '../edit-profile-usaha/edit-profile-usaha';
import { ListUsahaPage } from '../list-usaha/list-usaha';


@Component({
  selector: 'page-profile-usaha',
  templateUrl: 'profile-usaha.html',
})
export class ProfileUsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileUsahaPage');
  }

  editProfil(){
    this.navCtrl.push(EditProfileUsahaPage);
  }

  changeUsaha(){

    let confirm = this.alertCtrl.create({
      title: 'Pilih Usaha Lain?',
      message: 'Seluruh data terkait usaha akan diganti berdasarkan pilihan usaha.',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');    
            this.navCtrl.setRoot(ListUsahaPage);
          }
        }
      ]
    });
    confirm.present();
  }

  changePicture(){
    let confirm = this.alertCtrl.create({
      title: 'Perharui Sertifikat?',
      message: 'anda dapat mengunggah ulang sertifikat',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Perharui',
          handler: () => {
            console.log('Agree clicked');
            // this.updatePicture(); 
          }
        }
      ]
    });
      confirm.present();
  }


}
