import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController,AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-produkku-tambah',
  templateUrl: 'produkku-tambah.html',
})
export class ProdukkuTambahPage {

  submitted = false;

  namaProduk:any;
  hargaProduk:any;
  satuanProduk:any;

  satuanStatus:any=false;

  produkkus:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private data : Data,
    public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukkuTambahPage');
  }


  dismiss(){
    this.viewCtrl.dismiss();
  }

  satuanSelect(){
    this.satuanStatus=true;
  }

  tambah(form: NgForm) {
    
    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid && this.satuanStatus){
      
      loading.present();

      // api
      let input = {
        nama: this.namaProduk, 
        harga: this.hargaProduk,
        satuan: this.satuanProduk
      };
        this.http.post(this.data.BASE_URL+"/daftar_produk.php?id_usaha="+"1",input).subscribe(data => {
        let response = data.json();

        console.log(response);
        if(response.status==200){

          loading.dismiss();
          this.dismiss();
        }
        else {
          loading.dismiss();
           let alert = this.alertCtrl.create({
              title: 'Gagal Menambahkan',
              subTitle: 'Silahkan coba lagi',      
              buttons: ['OK']
            });
            alert.present();
        }      

      });

      // api

    }
    

  }



}
