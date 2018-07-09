import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  private socket = io("http://localhost:8080");
  constructor() { }


  joinRequestChat(data) {
    this.socket.emit('join', data);
  }

  leaveChat(data) {
    this.socket.emit('leave', data);
  }

  newUserJoined(){
    let observable = new Observable < { userName: String, message: String }>(observer =>{
      this.socket.on('userHasJoined', (data) => {
        observer.next(data);
      });
      return () => this.socket.disconnect();
    });
    return observable;
  }

  userHasLeft() {
    let observable = new Observable<{ userName: String, message: String }>(observer => {
      this.socket.on('userHasLeft', (data) => {
        observer.next(data);
      });
      return () => this.socket.disconnect();
    });
    return observable;
  }

}
