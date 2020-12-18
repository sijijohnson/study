import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video.component';
import {HttpClientModule} from '@angular/common/http';
import { freeApiService } from './services/freeapi.services';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TestComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
