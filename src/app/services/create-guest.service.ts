import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateGuestService {
  guest;

  constructor(private httpClient: HttpClient) { }

  create(creation: any, httpOptions: any) {
    const url = `${environment.server}/guest/`;
    this.httpClient.post(url, creation, httpOptions)
    .subscribe((payload) => {
      console.log(payload);
      this.guest = creation;
      console.log(this.guest);

      return this.guest;
    },
    (error) => console.log(error)
    );
  }

 }
