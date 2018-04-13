import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { EditProfileUsahaPage } from '../edit-profile-usaha/edit-profile-usaha';
import { ListUsahaPage } from '../list-usaha/list-usaha';


import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-profile-usaha',
  templateUrl: 'profile-usaha.html',
})
export class ProfileUsahaPage {

  image:any;

  validPhoto= false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private camera: Camera,
    public actionSheetCtrl : ActionSheetController,) {
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
            this.updatePicture(); 
          }
        }
      ]
    });
      confirm.present();
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
