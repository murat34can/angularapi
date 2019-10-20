import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './particle/movies/card/card.component';


import { HttpClientModule } from '@angular/common/http';
import { CardDetailComponent } from './particle/movies/card-detail/card-detail.component';//http get/post

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
