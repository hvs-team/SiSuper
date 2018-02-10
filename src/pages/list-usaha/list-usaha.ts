import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TambahUsahaPage } from '../tambah-usaha/tambah-usaha';
import { ProdukkuPage } from '../produkku/produkku';


@Component({
  selector: 'page-list-usaha',
  templateUrl: 'list-usaha.html',
})
export class ListUsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUsahaPage');
  }

  tambah(){
    this.navCtrl.push(TambahUsahaPage);
  }

  masuk(){
    this.navCtrl.setRoot(ProdukkuPage);
  }

}