import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import PlaceResult = google.maps.places.PlaceResult;
import {getPlacesResults} from "../../store/shipping/shipping.selectors";
import {Store} from "@ngrx/store";
import {ShippingState} from "../../store/shipping/shipping.reducer";
import Marker = google.maps.Marker;
import DirectionsRequest = google.maps.DirectionsRequest;
import {setCost, setRouteDistance} from "../../store/shipping/shipping.actions";


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

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  coordinates: google.maps.LatLng = new google.maps.LatLng(0, 0);

  markers: Array<Marker> = [];

  constructor(private store: Store<ShippingState>) {
    this.placesResults$ = this.store.select(getPlacesResults);
  }

  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
        this.coordinates = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.centerMap()
      });
    } else {
      this.centerMap()
    }
  }

  getDirections(places: Array<PlaceResult> | null) {
    if (places) {
      const request: DirectionsRequest = {
        origin: {query: places[0].formatted_address},
        destination: {query: places[1].formatted_address},
        travelMode: google.maps.TravelMode.DRIVING,
      }

      this.directionsService.route(request, (response, status) => {
        const routeDistance = (response.routes[0].legs[0].distance)
        if (status == 'OK') {
          this.store.dispatch(setRouteDistance({routeDistance}));
          this.store.dispatch(setCost())
          this.directionsRenderer.setDirections(response);
        }
      })
    }


  }

  showMapInfo() {
    this.placesResults$.subscribe(places => {
      let hasDirection = true;
      places?.forEach((place, i) => {
          this.markers[i] = new google.maps.Marker({
            position: place.geometry?.location,
            map: this.map,
          })
          if (i === 0) {
            this.map?.setCenter(place.geometry?.location ? place.geometry?.location : this.coordinates)
          }
          hasDirection = (hasDirection && (place.name === '')) ? false : hasDirection;
        }
      )
      if (hasDirection) this.getDirections(places)

    })
  }



  centerMap() {
    this.map = new google.maps.Map(this.mapContainer.nativeElement, {
      zoom: 10,
      center: this.coordinates,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })
    this.directionsRenderer.setMap(this.map);
    this.showMapInfo()
  }


}
