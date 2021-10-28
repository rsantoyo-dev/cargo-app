import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {loadGeolocations} from "../../store/geolocation/geolocation.actions";
import {Observable} from "rxjs";
import {getValue} from "../../store/geolocation/geolocation.selectors";
import {GeolocationState} from "../../store/geolocation/geolocation.reducer";

@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.scss']
})
export class GetAddressComponent implements OnInit {
  value$: Observable<number|null>;
  constructor(private store: Store<GeolocationState>) {
    this.value$ = this.store.select(getValue);
  }

  ngOnInit(): void {
      this.store.dispatch(loadGeolocations())


  }

}
