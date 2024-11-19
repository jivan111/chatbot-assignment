import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  private stockDataUrl = 'assets/stocks.json';

  constructor(private _http:HttpClient) { }

  getStockList():Observable<any>{
    return this._http.get<any[]>(this.stockDataUrl);
  }


}
