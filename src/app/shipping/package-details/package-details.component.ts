import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  sizeForm: FormGroup

  constructor() {
    this.sizeForm= new FormGroup({
      length: new FormControl(0),
      width: new FormControl(0),
      height: new FormControl(0),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.sizeForm.value);
  }

}
