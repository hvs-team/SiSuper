import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { AgendaPage } from '../agenda/agenda';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';


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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private data : Data,
    public http: Http) {

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
    let confirm = this.alertCtrl.create({
      title: 'Tambah Agenda?',
      message: 'undangan '+this.nama_undangan+' akan ditambahkan pada daftar agenda anda.',
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
      this.http.get(this.data.BASE_URL+"/daftar_agenda_undangan.php?id_usaha=1&id_undangan="+this.id_undangan).subscribe(data => {
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
