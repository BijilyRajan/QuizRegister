import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router : Router, public quizService : QuizService) { }

  ngOnInit(): void {

    this.quizService.seconds = 0;
    this.quizService.qnProgress = 0;

    this.quizService.getQuestions().subscribe(
      (data:any) => {
          this.quizService.qns = data;
          this.startTimer();
        }
      );

  }

  startTimer(){
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000)
  }

Answer(qID:string){
  alert(qID);
}

  
}
