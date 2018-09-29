import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent} from './quiz/quiz-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/quizes', pathMatch: 'full' },
  {path: 'quizes', component: QuizListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
