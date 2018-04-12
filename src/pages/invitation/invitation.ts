import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { InvitationDetailPage } from '../invitation-detail/invitation-detail';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-invitation',
  templateUrl: 'invitation.html',
})
export class InvitationPage {

  invitations:any;

  list_search: any;
  search = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private data : Data,
    public http: Http) {

      this.getInvitation();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitationPage');
  }

  gotoDetail(data){
    this.navCtrl.push(InvitationDetailPage, data);  
  }

  getInvitation(){
    let loading = this.loadCtrl.create({
      content: 'memuat..'
    });

    
    loading.present();
    //api
      this.http.get(this.data.BASE_URL+"/show_undangan.php?id_usaha="+"1").subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    

        this.invitations = response.data;

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


  //Fungsi Searchbar
  getItems(ev) {
    this.search=true;

    // Reset items back to all of the items
    this.list_search = this.invitations;

    console.log('list:'+this.list_search);

    // set val to the value of the ev target
    var val = ev.target.value;
    console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.list_search = this.list_search.filter((item) => {
      //   return (item.data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })


      this.list_search = this.list_search.filter((data) => {
        return ((data.nama_undangan.toLowerCase().indexOf(val.toLowerCase()) > -1) || (data.oleh_undangan.toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
    else {
      this.search=false;
      this.getInvitation();
    }

    console.log(this.list_search);
    console.log("search="+this.search);
  }
  //Fungsi Searchbar^^^^^

}
