import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioCardComponent } from './components/radio-card/radio-card.component';
import { CheckedImageComponent } from './assets/images/checked-image/checked-image.component';
import { RadioCardsComponent } from './containers/radio-cards/radio-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioCardComponent,
    CheckedImageComponent,
    RadioCardsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
