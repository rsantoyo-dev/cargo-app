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
  mapContainer:  ElementRef<HTMLElement>;

  placesResults$: Observable<Array<PlaceResult>|null>;

  map: google.maps.Map;

  lat = 12.9716;
  lng = 77.5946;

  coordinates:google.maps.LatLng = new google.maps.LatLng(this.lat, this.lng);

  marker: google.maps.Marker ;

  markers: Array<Marker> =[]


  constructor(private store: Store<GeolocationState>) {

    this.placesResults$ = this.store.select(getPlacesResults);

    this.placesResults$.subscribe(places=>{
      console.log('place')

        places?.forEach((place, i)=>{

          console.log(place.geometry?.location?.lat())
           this.marker = new google.maps.Marker({
             position: place.geometry?.location,
             map: this.map,
           });
          if (i===0){
            this.map?.setCenter( place.geometry?.location ?  place.geometry?.location : this.coordinates)
          }

        })


    })
  }
  ngAfterViewInit(): void{
    this.map = new google.maps.Map(this.mapContainer.nativeElement, {
      zoom: 10,
      center: this.coordinates,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })


   /* this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });*/

  }

  ngOnInit(): void {

  }

}
