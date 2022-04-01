import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './components/device/device.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';

const routes: Routes = [
  {path:'Home' , component  :HomeComponent},
  {path:'SignUp' , component  :ToolbarComponent},
  {path:'SignIn' , component  :DeviceComponent},
  {path:'HowItWorks' , component  :ToolbarComponent},
  {path:'About' , component  : AddDeviceComponent},
  {path:'Help' , component  :ToolbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
