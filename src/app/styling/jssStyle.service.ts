import {Injectable} from '@angular/core';
import {ITheme} from "./model";

@Injectable({
  providedIn: 'root'
})
export class JssStyleService {

  currentTheme:ITheme

  constructor() {
    this.currentTheme= this.defaultTheme()
  }

  setTheme(theme:ITheme){
   this.currentTheme = theme
  }

  theme(){
    return this.currentTheme
  }

  defaultTheme(): ITheme {
    return {
      breakpoints: {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1320},
      spacing: (factor) => `${0.25 * factor}rem`,
      typography: {
        default: {fontFamily: '"Roboto","Helvetica"', fontSize: '1.2em'},
        H1: {fontSize: {xs: '3em', md: '3.5em'}, fontWeight: 'bold'},
        H2: {fontSize: {xs: '2.5em', md: '3em'}, fontWeight: 'bolder'},
        H3: {fontSize: {xs: '2.0em', md: '2.5em'}, fontWeight: 'bolder'},
        H4: {fontSize: {xs: '1.8em', md: '2em'}, fontWeight: 'bolder'},
        H5: {fontSize: {xs: '1.5em', md: '1.8em'}, fontWeight: 'bolder'},
        H6: {fontSize: {xs: '1em', md: '1.2em'}, fontWeight: 'bolder'},
        BODY1: {fontSize: '1em', fontWeight: 'normal'},
        SPAN: {fontSize: '0.8em', fontWeight: 'normal'},
      },
      palette: {
        primary: {
          main: '#30a5af',
          light: '#49bab7',
          dark: '#2eb6dc',
          contrastText: '#f9fff7',
        },
        secondary: {
          main: '#2eb6dc',
        },
        error: 'orange'
      }
    }
  }

}

