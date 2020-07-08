import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public screenList = [
    {
      title: 'Featured',
      url: '/featured',
      icon: 'flash-outline'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'reader-outline'
    },
    {
      title: 'Detail',
      url: '/detail',
      icon: 'tv-outline'
    },
    {
      title: 'Facebook',
      url: '/facebook',
      icon: 'logo-facebook'
    },
    {
      title: 'Pinterest',
      url: '/pinterest',
      icon: 'logo-pinterest'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications-outline'
    },
    {
      title: 'Table',
      url: '/table',
      icon: 'grid-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.screenList.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
