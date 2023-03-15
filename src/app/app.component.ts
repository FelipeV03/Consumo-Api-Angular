import { Component } from '@angular/core';
import { ApiCoinGeckoService } from './services/api-coin-gecko.service';
import { CoinGeckoCoin } from './api.models';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consumo API Angular';

  Coins: CoinGeckoCoin[] = [];
  Titles: string[] = ['#', 'Nombre', 'Precio', '24h', 'Volumen 24h'];
  filtrerCoins: CoinGeckoCoin[] = [];
  searchCoin: any = '';

  constructor(private coinGecko: ApiCoinGeckoService) { }


  // Aca vamos a imprimir los datos de la API en la consola del navegador
  ngOnInit() {
    this.coinGecko.getCoins().subscribe({
      next: res => {
        console.log(res);
        this.Coins = <any>res;
        this.filtrerCoins = res;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('info de la API recibida');
      }
    });
  }

  search() {
    console.log(this.searchCoin);
    this.filtrerCoins = this.Coins.filter((coin) =>
      coin.name.toLowerCase().includes(this.searchCoin.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(this.searchCoin.toLowerCase())
    );
  }
}
