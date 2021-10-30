import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import PlaceResult = google.maps.places.PlaceResult;
import {getPlacesResults} from "../../store/geolocation/geolocation.selectors";
import {Store} from "@ngrx/store";
import {GeolocationState} from "../../store/geolocation/geolocation.reducer";
import Marker = google.maps.Marker;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false})
  mapContainer: ElementRef<HTMLElement>;

  placesResults$: Observable<Array<PlaceResult> | null>;

  map: google.maps.Map;

  coordinates: google.maps.LatLng = new google.maps.LatLng(0,0 );

  marker: google.maps.Marker;

  markers: Array<Marker> = [];

  constructor(private store: Store<GeolocationState>) {

    this.placesResults$ = this.store.select(getPlacesResults);

    this.placesResults$.subscribe(places => {
      places?.forEach((place, i) => {
          this.markers[i] = new google.maps.Marker({
            position: place.geometry?.location,
            map: this.map,
          })
          if (i === 0) {
            this.map?.setCenter(place.geometry?.location ? place.geometry?.location : this.coordinates)
          }
        }
      )
    })
  }

  ngAfterViewInit(): void {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos:GeolocationPosition)=>{
        this.coordinates = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.centerMap()
      });
    }
    else{
      this.centerMap()
    }
  }

  centerMap(){
    this.map = new google.maps.Map(this.mapContainer.nativeElement, {
      zoom: 10,
      center: this.coordinates,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })
  }


}
