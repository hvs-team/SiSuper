import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the TambahUsahaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tambah-usaha',
  templateUrl: 'tambah-usaha.html',
})
export class TambahUsahaPage {

  submitted = false;

  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahUsahaPage');
  }

  takePhoto(){
    
  }

}
