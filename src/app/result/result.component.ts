import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public quizService:QuizService, private route:Router) { }

  ngOnInit(): void {
    this.quizService.getAnswers().subscribe(
      (data:any) => {
        this.quizService.correctAnswerCount = 0;
        this.quizService.qns.forEach((e,i) => {

          if(e.answer == data[i])
          {
            this.quizService.correctAnswerCount ++;
            e.correct = data[i];
          }
        });
      } 
    )
  }




}
