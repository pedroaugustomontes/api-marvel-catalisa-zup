import { CharactersApiService } from './../../services/shared/characters-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  show = true;

  constructor(private characterService: CharactersApiService) { }
  allCharacters: Observable<any>;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): any {
    this.allCharacters = this.characterService.getAllCharacters();
  }
}
