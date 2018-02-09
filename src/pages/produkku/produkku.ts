import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController   } from 'ionic-angular';
import { ProdukkuTambahPage } from '../produkku-tambah/produkku-tambah';
import { ProdukkuUbahPage } from '../produkku-ubah/produkku-ubah';

@Component({
  selector: 'page-produkku',
  templateUrl: 'produkku.html',
})
export class ProdukkuPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukkuPage');
  }

  tambahProduk() {
    let modal = this.modalCtrl.create(ProdukkuTambahPage);
    modal.present();
  }
  ubahProduk(){
    let modal = this.modalCtrl.create(ProdukkuUbahPage);
    modal.present();
  }

}
