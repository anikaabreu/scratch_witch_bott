import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DictionaryService } from './services/dictionary.service';
import { WordService } from './services/word.service';
import { TwitterbotComponent } from './components/twitterbot/twitterbot.component';

import { AdjectivesComponent } from './components/adjectives/adjectives.component';
import { NounsComponent } from './components/nouns/nouns.component';


@NgModule({
  declarations: [
    AppComponent,
    TwitterbotComponent,
    NounsComponent,
    AdjectivesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DictionaryService, WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
