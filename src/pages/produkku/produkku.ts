import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController,AlertController, MenuController   } from 'ionic-angular';
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
  i:number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private data : Data,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public http: Http,
    public menuCtrl: MenuController) {


    this.menuCtrl.enable(true);

  }
  

  ionViewWillEnter() {
    console.log('ionViewDidLoad ProdukkuPage');
    this.getProdukku();
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

        for(let produk of this.produkku){
          produk.harga_produk_rupiah = this.toRp(produk.harga_produk);
        }


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

  toRp(angka){
    var rev     = parseInt(angka, 10).toString().split('').reverse().join('');
    var rev2    = '';
    for(var i = 0; i < rev.length; i++){
        rev2  += rev[i];
        if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
            rev2 += '.';
        }
    }
    return 'Rp. ' + rev2.split('').reverse().join('') + ',00';
  }

}
