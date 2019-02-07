import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root' // We are registering the service to root injector.
                       // So this service can be used by any component present in Angular Appli
})
export class SavedTrackService{  
    trackUrl = "http://localhost:8093/track/music/track";
    constructor(private http:HttpClient){
    }
    getAllSavedTracks():Observable<any[]>{
       this.trackUrl = "http://localhost:8093/track/music/track";
      return this.http.get<any[]>(this.trackUrl);
    }
    getTracksBySearchString(searchString:string):Observable<any[]>{
        this.trackUrl = "http://localhost:8093/track/music/track"+"?trackid="+searchString;
        return this.http.get<any[]>(this.trackUrl);
      }

      deleteTrack(trackid:number){
        this.http.delete("http://localhost:8093/track/music/track?trackid="+trackid).subscribe(data=>{
            console.log("delete request executed successfully ", data);
        },
        error => {
            console.log("deete request error message is : ",error)
        }
        );
    }

    updateTrack(trackid:number,trackname:string,comments:string){
        this.deleteTrack(trackid);
        console.log("in updateTrack method")
        this.saveTrack(trackid,trackname,comments);
    }
    saveTrack(trackid:number,trackname:string,comments:string){

        
        this.http.post("http://localhost:8093/track/music/track",
            {
            "trackid":trackid,
            "trackname":trackname,
            "comments":comments
            }
            ).subscribe(data=>{
                console.log("post request executed successfully ", data);
            },
            error => {
                console.log("post request error message is : ",error)
            }
            );
    }
}