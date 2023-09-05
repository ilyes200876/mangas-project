import { Component, OnInit } from '@angular/core';
import { MangaService } from '../manga.service';
import { IManga } from '../entities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.css']
})
export class MangaDetailsComponent implements OnInit{
  
  pokemon: IManga|undefined;
  constructor(private mangaService: MangaService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const mangaId = +params['id'];
      this.getPokemonById(mangaId - 1)
    })
  }
  getPokemonById(id: number){
    this.pokemon = this.mangaService.fetchById(id);
  }

}
