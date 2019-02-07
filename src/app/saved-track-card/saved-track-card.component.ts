import { Component, OnInit, Input } from '@angular/core';
import { SavedTrackService } from './saved-track-card.service';

@Component({
  selector: 'app-saved-track-card',
  templateUrl: './saved-track-card.component.html',
  styleUrls: ['./saved-track-card.component.css'],
  providers:[SavedTrackService]
})
export class SavedTrackCardComponent implements OnInit {

  constructor(private savedTrackService:SavedTrackService) { }
    trackPageTitle: string = 'List of all saved tracks';
    tracks: any[];
    errorMessage : string;
    updateComments:string;

    ngOnInit(): void {
      console.log("on init");
      this.savedTrackService.getAllSavedTracks().subscribe(
        responce => this.tracks = responce,
        error => this.errorMessage = <any> error
      );
    }
    onSearchClicked(searchString: string):void {
      this.trackPageTitle = 'Displaying the saved search result for "'+searchString+'"' ;
      this.savedTrackService.getTracksBySearchString(searchString).subscribe(
        responce => this.tracks = responce,
        error => this.errorMessage = <any> error
        );
    }
    toggleDeleteButton(trackid:number):void{
          this.savedTrackService.deleteTrack(trackid);
          console.log("Delete button clickedd!!");
        }
    toggleUpdateButton(trackid:number,trackname:string):void{
      console.log("Update button clickedd!!"+this.updateComments);
      this.savedTrackService.saveTrack(trackid,trackname,"sairam comments");
    }
    
    
}
