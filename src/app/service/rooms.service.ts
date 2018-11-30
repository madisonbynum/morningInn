import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
room;
  constructor(private httpClient: HttpClient) {
      }



  queryRoom() {
    const url = `http://localhost:8080/Project2/room`;
    this.httpClient.get(url).subscribe( (payload) => {
    this.room = payload;
    console.log('Room: ');
      console.log(this.room);
    return this.room;
    });
  }
}
