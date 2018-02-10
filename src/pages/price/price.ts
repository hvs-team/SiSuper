import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PriceDetailPage } from '../price-detail/price-detail';
import { PriceEditPage } from '../price-edit/price-edit';


@Component({
  selector: 'page-price',
  templateUrl: 'price.html',
})
export class PricePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PricePage');
  }

  gotoDetail(){
    this.navCtrl.push(PriceDetailPage);
  }

  kostumisasi(){
    this.navCtrl.push(PriceEditPage);
  }

}
