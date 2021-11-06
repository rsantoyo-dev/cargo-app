import { Component, OnInit } from '@angular/core';
import {ITheme, MimStyleService} from "../mimStyle.service";
import {MSO} from "../mimStyleOptions";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  theme:ITheme
  MSO = MSO

  constructor(private mimStyleService:MimStyleService) {
    this.theme=mimStyleService.themeSettings()

  }

  ngOnInit(): void {

  }

}
