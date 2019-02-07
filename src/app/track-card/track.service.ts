import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root' // We are registering the service to root injector.
                       // So this service can be used by any component present in Angular Appli
})
export class TrackService{  
    searchString:string="Believe";
    trackUrl = "http://ws.audioscrobbler.com/2.0/?method=track.search&track="+this.searchString+"&api_key=1240d24688ec8259965b80971a9b66dd&format=json";
    
    constructor(private http:HttpClient){

    }

    getTracksBySearchString(searchString:string){
      this.trackUrl = "http://ws.audioscrobbler.com/2.0/?method=track.search&track="+searchString+"&api_key=1240d24688ec8259965b80971a9b66dd&format=json";
      return this.http.get(this.trackUrl);
    }
    getTracks(): Observable<any[]> {
        return this.http.get<any[]>(this.trackUrl).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
      }
      private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}