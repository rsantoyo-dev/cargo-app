import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-place-auto-complete',
  templateUrl: './place-auto-complete.component.html',
  styleUrls: ['./place-auto-complete.component.scss']
})
export class PlaceAutoCompleteComponent implements AfterViewInit {

  @ViewChild('input')
  input: ElementRef<HTMLInputElement>;

  @Input() defaultPlace = '';

  @Output()
  placeChanged: EventEmitter<PlaceResult> = new EventEmitter<PlaceResult>();

  autoComplete: google.maps.places.Autocomplete;

  constructor() { }

  ngAfterViewInit(): void{
    let inputs: HTMLInputElement = this.input.nativeElement;
    this.initAutoComplete(inputs);

    //
  }

  private initAutoComplete(input: HTMLInputElement): void {
    this.autoComplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(this.autoComplete, 'place_changed', () => {
      this.placeChanged.emit(this.autoComplete.getPlace());
     // this.input.nativeElement.value=""
    });
  }

}
