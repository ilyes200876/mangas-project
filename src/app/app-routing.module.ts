import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { MangaListComponent } from './manga-list/manga-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mangaList', component: MangaListComponent},
  {path: 'mangalist/:id', component: MangaDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
