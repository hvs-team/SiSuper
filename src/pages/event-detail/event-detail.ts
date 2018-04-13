import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
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
  id_kegiatan:any;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public loadCtrl: LoadingController,
  public alertCtrl: AlertController,
  private data : Data,
  public http: Http
  ) {

    let temp = this.navParams.data;
    this.id_kegiatan = temp.id_kegiatan;
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
    let confirm = this.alertCtrl.create({
      title: 'Tambah Agenda?',
      message: 'kegiatan '+this.nama_kegiatan+' akan ditambahkan pada daftar agenda anda.',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Tambah',
          handler: () => {
            console.log('Agree clicked');
            this.addApi();
          }
        }
      ]
    });
      confirm.present();
  }

  addApi(){
    let loading = this.loadCtrl.create({
      content: 'menambahkan..'
    });
    
    loading.present();
    //api
      this.http.get(this.data.BASE_URL+"/daftar_agenda_kegiatan.php?id_usaha=1&id_kegiatan="+this.id_kegiatan).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        let alert = this.alertCtrl.create({
          title: 'Sukses Menambahkan Agenda',
          subTitle: 'anda dapat melihatnya pada halaman Agenda',      
          buttons: ['OK']
        });
        alert.present();
      } 
      else {
        let alert = this.alertCtrl.create({
            title: 'Gagal Menambahkan Agenda',
            subTitle: 'silahkan coba kembali',      
            buttons: ['OK']
          });
          alert.present();
      }


        loading.dismiss();
    });
    //api
  }

}
