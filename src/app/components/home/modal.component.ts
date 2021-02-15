import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  idVideo:string="";

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      this.idVideo = data.id;
      
    }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.dialogRef.close();
  }

}
