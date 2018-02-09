import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-agenda-detail',
  templateUrl: 'agenda-detail.html',
})
export class AgendaDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaDetailPage');
  }

  eraseAgenda(){
    this.navCtrl.pop();
  }

}
