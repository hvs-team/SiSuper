import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';

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
import { ProdukkuUbahPage } from '../pages/produkku-ubah/produkku-ubah';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { EditProfileUsahaPage } from '../pages/edit-profile-usaha/edit-profile-usaha';
import { PriceEditPage } from '../pages/price-edit/price-edit';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Data } from '../providers/data';
import { Storage } from '@ionic/storage';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Autosize } from '../directives/autosize/autosize';


let storage = new Storage({});


export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: "Bearer",
    noJwtError: true,
    globalHeaders: [{'Authorization': 'application/json'}],
    tokenGetter: (() => storage.get('access_token').then((token: string) => token)),
  }), http);
}


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
    PriceEditPage,
    ProdukkuPage,
    ProdukkuTambahPage,
    ProdukkuUbahPage,
    ProfilePage,
    ProfileUsahaPage,
    SignupPage,
    AgendaPage,
    AgendaDetailPage,
    EditProfilePage,
    EditProfileUsahaPage,

    ListPage,
    TambahUsahaPage,

    Autosize,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    PriceEditPage,
    ProdukkuPage,
    ProdukkuTambahPage,
    ProdukkuUbahPage,
    ProfilePage,
    ProfileUsahaPage,
    SignupPage,
    AgendaPage,
    AgendaDetailPage,
    EditProfilePage,
    EditProfileUsahaPage,

    ListPage,
    TambahUsahaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,

    Data,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },

    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
