import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  
  youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  apiKey:string = "AIzaSyDwhr_pqyuHcr2TzIJp002YWbffZQOTvVg";
  playlists:string = "UC80PWRj_ZU8Zu0HSMNVwKWw";
  nextPageToken = "";

  constructor(public http:HttpClient) {  }

  getVideos(){
    
    let api = "";
    if(this.nextPageToken){
     api = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UU80PWRj_ZU8Zu0HSMNVwKWw&nextPageToken=${this.nextPageToken}&key=${this.apiKey}`; 
    }else{
      api = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UU80PWRj_ZU8Zu0HSMNVwKWw&key=${this.apiKey}`; 

    }

  
    return this.http.get( api ).
    pipe( map( respuesta=>{
        console.log( respuesta  );
        this.nextPageToken = respuesta["nextPageToken"];

        let videos:any[] = [];
        for( let video of respuesta["items"] ){
            let snippet = video.snippet;
            videos.push( snippet );
        }
  
        return videos;
        
    } ) );

  }

}
