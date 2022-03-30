import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  showDialog(){
    this.dialog.open(DialogSignInComponent);
  }
  ngOnInit(): void {
  }

}


