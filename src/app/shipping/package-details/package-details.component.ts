import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {setLoadSize, setWeight} from "../../store/shipping/shipping.actions";
import {Store} from "@ngrx/store";
import {ShippingState} from "../../store/shipping/shipping.reducer";
import {LoadSize} from "../model";

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  sizeForm: FormGroup

  constructor(private store: Store<ShippingState>) {
    this.sizeForm = new FormGroup({
      length: new FormControl(0),
      width: new FormControl(0),
      height: new FormControl(0),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const loadSize: LoadSize = {
      ...this.sizeForm.value,
      volume: this.sizeForm.value.length * this.sizeForm.value.width * this.sizeForm.value.height
    }
    this.store.dispatch(setLoadSize({loadSize}))

  }

}
