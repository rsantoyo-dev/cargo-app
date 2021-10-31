import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-weigh-details',
  templateUrl: './weigh-details.component.html',
  styleUrls: ['./weigh-details.component.scss']
})
export class WeighDetailsComponent implements OnInit {

  weightForm = new FormGroup({
    weight: new FormControl(0),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.weightForm.value);
  }

}
