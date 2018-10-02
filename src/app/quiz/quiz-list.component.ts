import { Component, OnInit } from '@angular/core';
//
import { QuizService } from './../shared/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizes: Quiz[];
 
  constructor(private quizService: QuizService) { }
 
  ngOnInit() {
    this.getQuizes();
  }
  
  getQuizes(): void {
    this.quizService.getQuizes()
    .subscribe(quizes => this.quizes = quizes);
  }

}
