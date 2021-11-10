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
        h6: 'font-size:14, font-weight:400',
        body: 'font-size:12'
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

