import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { EventPage } from '../pages/event/event';
import { InvitationPage } from '../pages/invitation/invitation';
import { PricePage } from '../pages/price/price';
import { ProdukkuPage } from '../pages/produkku/produkku';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileUsahaPage } from '../pages/profile-usaha/profile-usaha';
import { AgendaPage } from '../pages/agenda/agenda';
import { Data } from '../providers/data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private data : Data) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Produk-ku', component: ProdukkuPage },
      { title: 'Kegiatan', component: EventPage },
      { title: 'Agenda', component: AgendaPage },
      { title: 'Undangan', component: InvitationPage },
      { title: 'Daftar Harga', component: PricePage },
      { title: 'Profil Saya', component: ProfilePage },
      { title: 'Profil UMKM', component: ProfileUsahaPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    //session logic
    this.data.isLogin().then((value)=>{
      if(value){
        this.rootPage = ProdukkuPage;
      } else {
         this.rootPage = OnboardingPage;
      }    
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
