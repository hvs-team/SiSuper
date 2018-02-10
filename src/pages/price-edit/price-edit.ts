import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-price-edit',
  templateUrl: 'price-edit.html',
})
export class PriceEditPage {

  AyamBroiler:boolean=true;

  list: any;
  list_search: any;
  search = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PriceEditPage');
  }

  //Fungsi Searchbar
  getItems(ev) {
    this.search=true;

    // Reset items back to all of the items
    this.list_search = this.list;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list_search = this.list_search.filter((item) => {
        return (item.data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      // this.list_search = this.list_search.filter((data) => {
      //   return (data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
    }
    else {
      this.search=false;
    }

    console.log(this.list_search);
    console.log("search="+this.search);
  }
  //Fungsi Searchbar^^^^^

}
