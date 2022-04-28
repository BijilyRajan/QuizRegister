import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

// properties
readonly rootUrl = "https://localhost:7216";

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

}
