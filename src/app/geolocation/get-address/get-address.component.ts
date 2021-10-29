import {AfterViewInit, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {GeolocationState} from "../../store/geolocation/geolocation.reducer";
import {Observable} from "rxjs";
import {getValue} from "../../store/geolocation/geolocation.selectors";
import {setPlaceResult} from "../../store/geolocation/geolocation.actions";
import PlaceResult = google.maps.places.PlaceResult;



@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.scss']
})
export class GetAddressComponent implements AfterViewInit{

  value$: Observable<number|null>;

  constructor(private store: Store<GeolocationState>) {
    this.value$ = this.store.select(getValue);
  }

  ngAfterViewInit(): void{
   // this.store.dispatch(loadGeolocations())
  }

  placeChanged(placeResult: PlaceResult) {

    this.store.dispatch(setPlaceResult({placeResult}))
  }

}
