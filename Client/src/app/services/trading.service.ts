import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';

const urlGetData = 'http://localhost:8080/v1/get-data';

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  tradingLists = this.socket.fromEvent<string>('trading-lists');

  constructor(private http: HttpClient, private socket: Socket) { }

  getData() {
    return this.http.get(urlGetData);
  }
}
