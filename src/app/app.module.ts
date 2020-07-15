import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './services/inmemorydb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioCardComponent } from './components/radio-card/radio-card.component';
import { CheckedImageComponent } from './assets/images/checked-image/checked-image.component';
import { ConfigurationCardComponent } from './containers/configuration-card/configuration-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioCardComponent,
    CheckedImageComponent,
    ConfigurationCardComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
