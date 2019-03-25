import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AppRoutingModule } from './app-routing.module';
import {GameService} from './core/http/game.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import { GamesDetailComponent } from './games/components/games-detail/games-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GamesDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
