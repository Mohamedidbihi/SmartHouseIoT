import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-device-details',
  templateUrl: './dialog-device-details.component.html',
  styleUrls: ['./dialog-device-details.component.css']
})
export class DialogDeviceDetailsComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public devices: any) { }

  ngOnInit(): void {
    console.log(this.devices)
  }






}
