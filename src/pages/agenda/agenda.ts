import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { AgendaDetailPage } from '../agenda-detail/agenda-detail';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  agendas:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private data : Data,
    public http: Http) {


  }

  ionViewWillEnter() {
    this.getAgenda();
    console.log('ionViewDidLoad AgendaPage');
  }

  gotoDetail(data){
    this.navCtrl.push(AgendaDetailPage, data);
  }

  getAgenda(){
    let loading = this.loadCtrl.create({
      content: 'memuat..'
    });

    
    loading.present();
    //api
      this.http.get(this.data.BASE_URL+"/show_agenda.php?id_usaha="+"1").subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    

        this.agendas = response.data;

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
