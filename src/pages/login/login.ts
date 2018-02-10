import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ProdukkuPage } from '../produkku/produkku';
import { ListPage } from '../list/list';
import { ListUsahaPage } from '../list-usaha/list-usaha';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitted = false;
  lihat = true;
  status = "password";


  email:any;
  password:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  daftar(){
    this.navCtrl.setRoot(SignupPage);
  }

  skip(){
    this.navCtrl.setRoot(ProdukkuPage);
  }

  login(){
    this.navCtrl.setRoot(ListUsahaPage)
  }

  masuk(form: NgForm) {
    
    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid){
      
      loading.present();

      //apiLogin
      let input = {
        email: this.email, 
        password: this.password
      };
      console.log(input);
        this.http.post(this.data.BASE_URL+"/login_user.php",input).subscribe(data => {
        let response = data.json();
        console.log(response); 
        if(response.status==200){    
          this.data.logout();

          //tembak login si xsight buat dapetin token
          // this.data.token(response.token);   
          
          
          this.data.login(response.user,"user");//ke lokal
          this.login();
          loading.dismiss();
        }
        else {
          loading.dismiss();
           let alert = this.alertCtrl.create({
              title: 'Gagal Masuk',
              subTitle: response.message,      
              buttons: ['OK']
            });
            alert.present();
        }
      //apilogin        

    });
    }
    else{

      let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              // this.vibration.vibrate(1000);
              alert.present();

    }

  }
}
