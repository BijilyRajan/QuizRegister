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

  qnCount:number = 0;

  ngOnInit(): void {

    this.quizService.seconds = 0;
    this.quizService.qnProgress = 0;


    this.quizService.getQuestions().subscribe(
      (data:any) => {
          this.quizService.qns = data;
          this.startTimer();
          this.qnCount = Object.keys(this.quizService.qns).length;
        }
      );

  }

  startTimer(){
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000)
  }

Answer(qID:number, choice:number){
  
  this.quizService.qns[this.quizService.qnProgress].answer = choice + 1;
  this.quizService.qnProgress++;

  if( this.quizService.qnProgress == this.qnCount){
    clearInterval(this.quizService.timer);
    this.router.navigate(['/result']);
  }
}

  
}
