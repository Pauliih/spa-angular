import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  texto: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params['texto'];
      this.heroes = this._heroesService.buscarHeroes(params['texto']);
      console.log(this.heroes);
    });
  }

}
