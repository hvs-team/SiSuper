import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-list-usaha',
  templateUrl: 'list-usaha.html',
})
export class ListUsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUsahaPage');
  }

}