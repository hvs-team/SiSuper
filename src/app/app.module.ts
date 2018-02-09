import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { EventPage } from '../pages/event/event';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { InvitationPage } from '../pages/invitation/invitation';
import { InvitationDetailPage } from '../pages/invitation-detail/invitation-detail';
import { ListUsahaPage } from '../pages/list-usaha/list-usaha';
import { LoginPage } from '../pages/login/login';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { PricePage } from '../pages/price/price';
import { PriceDetailPage } from '../pages/price-detail/price-detail';
import { ProdukkuPage } from '../pages/produkku/produkku';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileUsahaPage } from '../pages/profile-usaha/profile-usaha';
import { SignupPage } from '../pages/signup/signup';
import { AgendaPage } from '../pages/agenda/agenda';
import { TambahUsahaPage } from '../pages/tambah-usaha/tambah-usaha';
import { ProdukkuTambahPage } from '../pages/produkku-tambah/produkku-tambah';
import { AgendaDetailPage } from '../pages/agenda-detail/agenda-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,

    EventPage,
    EventDetailPage,
    InvitationPage,
    InvitationDetailPage,
    ListUsahaPage,
    LoginPage,
    OnboardingPage,
    PricePage,
    PriceDetailPage,
    ProdukkuPage,
    ProdukkuTambahPage,
    ProfilePage,
    ProfileUsahaPage,
    SignupPage,
    AgendaPage,
    AgendaDetailPage,

    ListPage,
    TambahUsahaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    EventPage,
    EventDetailPage,
    InvitationPage,
    InvitationDetailPage,
    ListUsahaPage,
    LoginPage,
    OnboardingPage,
    PricePage,
    PriceDetailPage,
    ProdukkuPage,
    ProdukkuTambahPage,
    ProfilePage,
    ProfileUsahaPage,
    SignupPage,
    AgendaPage,
    AgendaDetailPage,

    ListPage,
    TambahUsahaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
