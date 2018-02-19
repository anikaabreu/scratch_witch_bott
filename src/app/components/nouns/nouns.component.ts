import { Component, OnInit } from '@angular/core';
import { Nouns } from '../../models/Nouns';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-nouns',
  templateUrl: './nouns.component.html',
 
})
export class NounsComponent implements OnInit {

nouns: Nouns[];

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.wordService.getNoun().subscribe(nouns => {
      console.log(nouns)
      this.nouns = nouns;
    })
  }

}
