import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvitationDetailPage } from '../invitation-detail/invitation-detail';


@Component({
  selector: 'page-invitation',
  templateUrl: 'invitation.html',
})
export class InvitationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitationPage');
  }

  gotoDetail(){
    this.navCtrl.push(InvitationDetailPage);  
  }

}
