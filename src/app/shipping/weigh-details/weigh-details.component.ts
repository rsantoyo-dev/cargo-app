import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ShippingState} from "../../store/shipping/shipping.reducer";
import {setWeight, updatePlaceByIndex} from "../../store/shipping/shipping.actions";

@Component({
  selector: 'app-weigh-details',
  templateUrl: './weigh-details.component.html',
  styleUrls: ['./weigh-details.component.scss']
})
export class WeighDetailsComponent implements OnInit {

  weightForm:FormGroup;

  constructor(private store: Store<ShippingState>) {
    this.weightForm = new FormGroup({
      weight: new FormControl(0),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(setWeight({weight:this.weightForm.value}))
  }

}
