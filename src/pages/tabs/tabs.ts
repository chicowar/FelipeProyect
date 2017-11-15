import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { AgendasPage } from '../agendas/agendas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = MapPage;
  tab4Root = ContactPage;
  tab5Root = AgendasPage;

  constructor() {

  }
}
