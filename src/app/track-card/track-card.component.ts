import { Component, OnInit } from '@angular/core';
import { TrackService } from './track.service';
import { TrackDataService } from './track.data.service';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css'],
  providers: [TrackService, TrackDataService]
})
export class TrackCardComponent implements OnInit {
  trackPageTitle: string = 'List of all tracks';
  imageWidth: number = 50;
  imageMargin: number = 2;
  tracks: any[];
  errorMessage: string;

  constructor(private trackService: TrackService, private trackDataService: TrackDataService) {

  }

  ngOnInit(): void {
    console.log("on init");
    this.trackService.getTracks().subscribe(
      responce => this.tracks = responce['results']['trackmatches']['track'],
      error => this.errorMessage = <any>error
    );
  }
  onSearchClicked(searchString: string): void {
    this.trackPageTitle = 'Displaying the search result for "' + searchString + '"';
    console.log("searchString value is ", searchString);
    this.trackService.getTracksBySearchString(searchString).subscribe(
      responce => this.tracks = responce['results']['trackmatches']['track'],
      error => this.errorMessage = <any>error
    );
  }
  addTrackButtonClicked(trackid: number, trackname: string, comments: string): void {
    this.trackDataService.saveTrack(trackid, trackname, comments);
  }
}

