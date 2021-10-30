import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false})
  mapContainer:  ElementRef<HTMLElement>;

  map: google.maps.Map;

  lat = 12.9716;
  lng = 77.5946;

  coordinates:google.maps.LatLng = new google.maps.LatLng(this.lat, this.lng);

  marker: google.maps.Marker ;


  constructor() {

  }
  ngAfterViewInit(): void{
    this.map = new google.maps.Map(this.mapContainer.nativeElement, {
      zoom: 10,
      center: this.coordinates,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })

    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

  }

  ngOnInit(): void {

  }

}
