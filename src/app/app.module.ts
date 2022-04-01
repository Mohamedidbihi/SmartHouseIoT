import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';
import { DeviceComponent } from './components/device/device.component';
import { CommonModule } from '@angular/common';
import { DialogSignInComponent } from './components/dialog-sign-in/dialog-sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogDeviceDetailsComponent } from './components/dialog-device-details/dialog-device-details.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    DeviceComponent,
    DialogSignInComponent,
    AddDeviceComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule],
   entryComponents:[
     DialogSignInComponent,
     DialogDeviceDetailsComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
