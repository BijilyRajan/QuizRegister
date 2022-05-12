import { Injectable } from '@angular/core';
import{ HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

// properties
readonly rootUrl = "https://localhost:7216";

  qns: any[] = [];
  seconds: number = 0;
  timer: any;
  qnProgress:number = 0;
  correctAnswerCount:number = 0;



// http://localhost:7216/api/InsertParticipants 
  constructor(private http: HttpClient) { }


  //Http Methods
insertParticipant(name:string, email:string){
    var body = {
      Name:name,
      Email:email
    }
    return this.http.post(this.rootUrl + '/api/InsertParticipants', body);
  }

  getQuestions(){
    return this.http.get(this.rootUrl + '/api/Questions')
  }

getAnswers(){
  var body = this.qns.map(x=> x.qnID);
  return this.http.post(this.rootUrl + '/api/Questions/api/GetAnswersById', body);
}

}
