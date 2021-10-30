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


  constructor() { }
  ngAfterViewInit(): void{
    new google.maps.Map(this.mapContainer.nativeElement, {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })
  }

  ngOnInit(): void {

  }

}
