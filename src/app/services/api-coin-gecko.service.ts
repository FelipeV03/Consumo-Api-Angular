import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoinGeckoCoin } from '../api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiCoinGeckoService {

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get<CoinGeckoCoin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false');
  }
}
