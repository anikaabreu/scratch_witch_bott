import { Component, OnInit } from '@angular/core';
import { Adjs } from '../../models/Adj'
import { DictionaryService } from '../../services/dictionary.service'


@Component({
  selector: 'app-adjectives',
  templateUrl: './adjectives.component.html',
  
})
export class AdjectivesComponent implements OnInit {

  adjs: Adjs[];

  constructor(private dicService: DictionaryService) { }

  ngOnInit() {
    this.dicService.getAdj().subscribe(adjs => {
      this.adjs = adjs;
      console.log(adjs)
    })
  }

}
