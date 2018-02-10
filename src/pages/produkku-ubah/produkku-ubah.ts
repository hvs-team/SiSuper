import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController  } from 'ionic-angular';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-produkku-ubah',
  templateUrl: 'produkku-ubah.html',
})
export class ProdukkuUbahPage {

  submitted = false;

  namaProduk:any;
  hargaProduk:any;
  satuanProduk:any;
  idProduk:any;

  satuanStatus:any=true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private data : Data,
    public http: Http) {

      let temp = this.navParams.data;
      this.namaProduk = temp.nama_produk;
      this.hargaProduk = temp.harga_produk;
      this.satuanProduk = temp.satuan_produk;
      this.idProduk = temp.id_produk;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukkuUbahPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  satuanSelect(){
    this.satuanStatus=true;
  }

  hapusProduk(){
    let loading = this.loadCtrl.create({
      content: 'memuat..'
    });

    loading.present();

    // api
    let input = {
      nama: this.namaProduk, 
      harga: this.hargaProduk,
      satuan: this.satuanProduk
    };
      this.http.get(this.data.BASE_URL+"/hapus_produk.php?id_produk="+this.idProduk).subscribe(data => {
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
        this.http.post(this.data.BASE_URL+"/ubah_produk.php?id_produk="+this.idProduk,input).subscribe(data => {
        let response = data.json();

        console.log(input);
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
    else {
      let alert = this.alertCtrl.create({
        title: 'Gagal Mengubah Data',
        subTitle: 'Harap isi semua data produk.',      
        buttons: ['OK']
      });
      alert.present();
    }
    

  }


  delete(){
    let confirm = this.alertCtrl.create({
      title: 'Hapus Produk Ayam Geprek Pedes?',
      
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Hapus',
          handler: () => {
            console.log('Agree clicked');
            this.hapusProduk();
          }
        }
      ]
    });
    confirm.present();
  }
  

}
