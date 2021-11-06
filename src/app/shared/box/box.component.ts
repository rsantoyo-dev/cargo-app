import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ITheme, MimStyleService} from "../mimStyle.service";

@Component({
  selector: 'mim-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})

export class BoxComponent implements OnInit {

  @Input() p?: number;
  @Input() bgColor?: string;
  @Input() width?: number;

  style:{};

  theme:ITheme;

  constructor(private mimStyleService:MimStyleService, public templateRef: TemplateRef<unknown>) {
    this.theme=mimStyleService.themeSettings();
  }


  ngOnInit(): void {

      this.style = {...this.style,
        padding: this.p && this.theme.spacing(this.p),
        backgroundColor: this.bgColor && this.bgColor,
        width: this.width && this.width+'%'
      };
  }

}
