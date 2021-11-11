import {Injectable} from '@angular/core';
import {ITheme} from "./model";

@Injectable({
  providedIn: 'root'
})
export class JssStyleService {


  constructor() {

  }

  theme(): ITheme {
    return {
      breakpoints: {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1320},
      spacing: (factor) => `${0.25 * factor}rem`,
      typography: {
        H1: {fontSize: '3em', fontWeight:'bold'},
        H2: {fontSize:'2.2em', fontWeight:'bolder'},
        H3: {fontSize:'1.8em', fontWeight:'bolder'},
        H4: {fontSize:'1.5em', fontWeight:'bolder'},
        H5: {fontSize:'1.4em', fontWeight:'bolder'},
        H6: {fontSize:'1.2em', fontWeight:'bolder'},
        SPAN: {fontSize:'1em', fontWeight:'normal'},
        BODY1: {fontSize:'0.8em', fontWeight:'normal'},

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

