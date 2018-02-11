import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaPage } from '../agenda/agenda';


@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  nama_kegiatan:any;
  oleh_kegiatan:any;
  tanggal_kegiatan:any;
  lokasi_kegiatan:any;
  deskripsi_kegiatan:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let temp = this.navParams.data;
    this.nama_kegiatan = temp.nama_kegiatan; 
    this.oleh_kegiatan = temp.oleh_kegiatan;
    this.tanggal_kegiatan = temp.tanggal_kegiatan;
    this.lokasi_kegiatan = temp.lokasi_kegiatan ;
    this.deskripsi_kegiatan = temp.deskripsi_kegiatan;

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  addAgenda(){
    this.navCtrl.setRoot(AgendaPage);
  }

}
