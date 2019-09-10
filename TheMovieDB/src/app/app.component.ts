import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Name';
  Rating = '[Rating]';
  ShortDescription= '[description]';
  RunTime = '[time]';
  ReleaseDate ='[Date]';
  MovieThumbnail ='[url]';
}
