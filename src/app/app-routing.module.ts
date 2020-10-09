import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/characters', pathMatch: 'full'
  },
  {
    path: 'characters', component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
