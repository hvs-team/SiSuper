import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaPage } from '../agenda/agenda';


@Component({
  selector: 'page-invitation-detail',
  templateUrl: 'invitation-detail.html',
})
export class InvitationDetailPage {

  deskripsi_undangan:any;
  id_undangan:any;
  id_usaha:any;
  lokasi_undangan:any;
  nama_undangan:any;
  oleh_undangan:any;
  tanggal_undangan:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let temp = this.navParams.data;
    this.deskripsi_undangan = temp.deskripsi_undangan;
    this.id_undangan = temp.id_undangan;
    this.id_usaha = temp.id_usaha;
    this.lokasi_undangan = temp.lokasi_undangan;
    this.nama_undangan = temp.nama_undangan;
    this.oleh_undangan = temp.oleh_undangan;
    this.tanggal_undangan = temp.tanggal_undangan;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitationDetailPage');
  }

  addAgenda(){
    this.navCtrl.setRoot(AgendaPage);
  }

}
