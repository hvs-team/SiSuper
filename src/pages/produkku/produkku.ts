import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController,AlertController   } from 'ionic-angular';
import { ProdukkuTambahPage } from '../produkku-tambah/produkku-tambah';
import { ProdukkuUbahPage } from '../produkku-ubah/produkku-ubah';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-produkku',
  templateUrl: 'produkku.html',
})
export class ProdukkuPage {

  produkku:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private data : Data,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public http: Http) {

      this.getProdukku();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukkuPage');
  }

  tambahProduk() {
    let modal = this.modalCtrl.create(ProdukkuTambahPage);
    modal.onDidDismiss(() => {
      this.getProdukku();
    });
    modal.present();
  }
  ubahProduk(data){
    let modal = this.modalCtrl.create(ProdukkuUbahPage, data);
    modal.onDidDismiss(() => {
      this.getProdukku();
    });
    modal.present();
  }

  getProdukku(){
    let loading = this.loadCtrl.create({
      content: 'memuat..'
    });
    
    loading.present();
    //api
      this.http.get(this.data.BASE_URL+"/show_produk.php?id_usaha="+"1").subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    

        this.produkku = response.data;

        loading.dismiss();
      }
      else {
        loading.dismiss();
         let alert = this.alertCtrl.create({
            title: 'Gagal',
            subTitle: response.message,      
            buttons: ['OK']
          });
          alert.present();
      }
    });
    //api
  }

}
