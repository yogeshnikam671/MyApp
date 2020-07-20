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
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioCardComponent,
    CheckedImageComponent,
    ConfigurationCardComponent,
    ProgressBarComponent,
    ButtonComponent
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
