import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { Data } from '../../providers/data';
import { OnboardingPage } from '../onboarding/onboarding';
import { LoginPage } from '../login/login';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  nama:any;
  email:any;
  nomor:any;
  alamat:any;

  image:any;

  validPhoto= false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public alertCtrl: AlertController,
    public actionSheetCtrl : ActionSheetController,
    private camera: Camera, ) {

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


  tambahsertifikat(){
    this.updatePicture();
  }



  updatePicture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar Baru',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery();
          }
        }
      ]
    });
    actionSheet.present();
  }

  async takePicture(){
    try {
      const options : CameraOptions = {
        quality: 50, //to reduce img size
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL, //to make it base64 image
        encodingType: this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        correctOrientation: true
      }

      const result =  await this.camera.getPicture(options);

      this.image = 'data:image/jpeg;base64,' + result;

      this.validPhoto=true;

    }
    catch (e) {
      console.error(e);
      alert("error");
    }

  }

  getPhotoFromGallery(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      // this.base64Image = imageData;
      // this.uploadFoto();
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.validPhoto=true;
      }, (err) => {
    });
  }

}
