import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StructuraldirectivesComponent,
    InterpolationComponent,
    DatabindingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
