import { Component, OnInit } from '@angular/core';
import {ITheme, MimStyleService} from "../../styling/mimStyle.service";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  theme:ITheme
  constructor(private mimStyleService:MimStyleService) {
    this.theme=mimStyleService.themeSettings();
  }

  ngOnInit(): void {

  }

}
