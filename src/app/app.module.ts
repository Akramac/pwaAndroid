import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
=======
>>>>>>> parent of 3a2d4d8... Deploy to github First

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
=======
    BrowserModule
>>>>>>> parent of 3a2d4d8... Deploy to github First
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
