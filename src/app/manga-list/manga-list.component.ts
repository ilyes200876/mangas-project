import { Component } from '@angular/core';
import { MANGAS } from '../mock-manga';
import { IManga } from '../entities';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent {

  mangas: IManga[] = MANGAS;

}
