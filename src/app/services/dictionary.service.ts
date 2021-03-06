import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { get } from 'selenium-webdriver/http';


import { Adjs } from '../models/Adj'


@Injectable()
export class DictionaryService {
  
  adjUrl: string = 'http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&excludePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

  constructor(private http: HttpClient) {
    
   }

      getAdj() : Observable<Adjs[]> {
    return this.http.get<Adjs[]>(this.adjUrl);
   }

}
