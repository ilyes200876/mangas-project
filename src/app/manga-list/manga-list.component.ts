import { Component, OnInit } from '@angular/core';
import { IManga } from '../entities';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit{

  mangas: IManga[] = [];

  constructor(private mangaService: MangaService){}

  ngOnInit(): void {

    this.getMangas();
    this.showManga(0);
    
  }
  getMangas(){
    this.mangas = this.mangaService.fetchAllMangas();
    return this.mangas;
  }

  showManga(i: number){
    return (this.mangaService.fetchByIndex(i));
  }
}
