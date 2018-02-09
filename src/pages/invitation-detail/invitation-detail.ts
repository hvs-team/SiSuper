import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaPage } from '../agenda/agenda';


@Component({
  selector: 'page-invitation-detail',
  templateUrl: 'invitation-detail.html',
})
export class InvitationDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitationDetailPage');
  }

  addAgenda(){
    this.navCtrl.setRoot(AgendaPage);
  }

}
