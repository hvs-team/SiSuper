import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController,AlertController } from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  kegiatans:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private data : Data,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public http: Http) {

      this.getKegiatan();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  gotoDetail(){
    this.navCtrl.push(EventDetailPage);
  }

  getKegiatan(){
    let loading = this.loadCtrl.create({
      content: 'memuat..'
    });
    
    loading.present();
    //api
      this.http.get(this.data.BASE_URL+"/show_kegiatan.php") .subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.kegiatans = response.data;
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
