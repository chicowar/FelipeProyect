import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(51.507351, -0.127758);

    const options = {
      center: location,
      zoom: 15,
      streetViewControl: false,
      mapTypeId: 'terrain'
    }

    const map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location, map);
  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map

    });
  }

}
