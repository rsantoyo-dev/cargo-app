import { Component, OnInit } from '@angular/core';
import {MimStyleService} from "../mimStyle.service";
import {MSO} from "../mimStyleOptions";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  ms:MimStyleService
  MSO = MSO

  constructor(private mimStyleService:MimStyleService) {
    this.ms=mimStyleService

  }

  ngOnInit(): void {

  }

}
