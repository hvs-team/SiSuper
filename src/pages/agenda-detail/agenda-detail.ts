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

  deskripsi_kegiatan:any;
  id_agenda:any;
  id_kegiatan:any;
  id_usaha:any;
  lokasi_kegiatan:any;
  nama_kegiatan:any;
  oleh_kegiatan:any;
  tanggal_kegiatan:any;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public loadCtrl: LoadingController,
  public alertCtrl: AlertController,
  private data : Data,
  public http: Http) {

      let temp = this.navParams.data;
      this.deskripsi_kegiatan = temp.deskripsi_kegiatan;
      this.id_agenda = temp.id_agenda;
      this.id_kegiatan = temp.id_kegiatan;
      this.id_usaha = temp.id_usaha;
      this.lokasi_kegiatan = temp.lokasi_kegiatan;
      this.nama_kegiatan = temp.nama_kegiatan;
      this.oleh_kegiatan = temp.oleh_kegiatan;
      this.tanggal_kegiatan = temp.tanggal_kegiatan;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaDetailPage');
  }

  eraseAgenda(){
    this.navCtrl.pop();
  }

  

}
