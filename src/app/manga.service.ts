import { Injectable } from '@angular/core';
import { MANGAS } from './mock-manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }

  fetchAllMangas(){
    return MANGAS;
  }

  fetchById(i: number){
    return MANGAS[i];
  }

}
