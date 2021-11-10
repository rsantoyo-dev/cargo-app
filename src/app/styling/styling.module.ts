import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperJssDirective } from './super-jss.directive';



@NgModule({
  declarations: [
    SuperJssDirective
  ],
  exports: [
    SuperJssDirective
  ],
  imports: [
    CommonModule
  ]
})
export class StylingModule { }
