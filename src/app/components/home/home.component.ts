import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalComponent } from './modal.component';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {
  
  videos:any[]=[];
  videlSel:any;


  constructor(public _yts:YoutubeService, public dialog: MatDialog) {
    this._yts.getVideos().subscribe( videos=>{
      this.videos = videos;
    });
   }

  ngOnInit(): void {
  }

  verVideo(video:any){
    this.videlSel = video;
    // $('#myModal').modal();
    console.log(video);
    console.log(video.resourceId.videoId);
    
    console.log(video.title);

    
    const dialogRef = this.dialog.open(ModalComponent  , {
      width: '660px',
      data: { name: video.title, id: video.resourceId.videoId }
    });

    dialogRef.afterClosed().subscribe(result => {
         console.log(result);
    });
    
  }

  cargarMasVideos(){
    this._yts.getVideos().subscribe( videos=>{
      this.videos.push.apply( this.videos, videos )
    });
  }

}
