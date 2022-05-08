import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMsg: string="";
  Name:string = "";
  Email:string = "";
  hide:boolean=false;

  constructor(private quizService:QuizService, private route : Router) { }

  ngOnInit(): void {
  }

  login(){

    this.quizService.insertParticipant(this.Name, this.Email).subscribe(
      (data:any) => {
        localStorage.clear();
        localStorage.setItem('participant', JSON.stringify(data));
        this.route.navigate(['/quiz'])
      }
    )
  }

}
