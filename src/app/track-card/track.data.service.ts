import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { error } from 'util';

@Injectable({
    providedIn: 'root' // We are registering the service to root injector.
                       // So this service can be used by any component present in Angular Appli
})
export class TrackDataService{  
    constructor(private http:HttpClient){

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

    deleteTrack(trackid:number){
        this.http.delete("http://localhost:8093/track/music/track?trackid="+trackid).subscribe(data=>{
            console.log("delete request executed successfully ", data);
        },
        error => {
            console.log("deete request error message is : ",error)
        }
        );
    }
    
}