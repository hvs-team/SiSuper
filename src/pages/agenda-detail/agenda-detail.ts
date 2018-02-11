import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-agenda-detail',
  templateUrl: 'agenda-detail.html',
})
export class AgendaDetailPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public loadCtrl: LoadingController,
  public alertCtrl: AlertController,
  private data : Data,
  public http: Http) {

  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaDetailPage');
  }

  eraseAgenda(){
    this.navCtrl.pop();
  }

  

}
