import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukkuTambahPage');
  }

  ionViewWillLeave() {
    // refresh content disini mungkin
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

      //apiLogin
      // let input = {
      //   namaProduk: this.namaProduk, 
      //   hargaProduk: this.hargaProduk,
      //   satuan: this.satuanProduk
      // };
      //   this.http.post(this.data.BASE_URL+"/signin",input).subscribe(data => {
      //   let response = data.json();
      //   if(response.status==true){
      //     console.log(response);     
      //     this.data.logout();
      //     this.data.token(response.token);   
      //     this.data.login(response.user,"user");//ke lokal
      //     this.createUser("user");
      //     this.Login();
      //     loading.dismiss();
      //   }
      //   else {
      //     loading.dismiss();
      //      let alert = this.alertCtrl.create({
      //         title: 'Gagal Masuk',
      //         subTitle: 'Invalid User',      
      //         buttons: ['OK']
      //       });
      //       alert.present();
      //   }      

    // });

      //apilogin  

      loading.dismiss();
      this.dismiss();
    }
    

  }



}
