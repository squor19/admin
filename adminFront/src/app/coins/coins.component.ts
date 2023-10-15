import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../models/coin.model';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent {
  coins: Coin[] = [];
  username: string = 'Max';

  constructor(private http: HttpClient) {
    
    this.coins = [
      { name: 'Bitcoin', tag: 'BTC', logoFileName: 'bitcoin-logo.png' },
      { name: 'Eeum', tag: 'ETH', logoFileName: 'ethereum-logo.png' },
      { name: 'Etherem', tag: 'ETH', logoFileName: 'ethereum-logo.png' },
      { name: 'Etum', tag: 'ETH', logoFileName: 'ethereum-logo.png' },
      { name: 'Ethum', tag: 'ETH', logoFileName: 'ethereum-logo.png' },
      { name: 'reum', tag: 'ETH', logoFileName: 'ethereum-logo.png' }
      // Add more coins as needed
    ];
  }

  ngOnInit(): void {
    
    this.http.get<Coin[]>('your-api-url').subscribe(data => {
      this.coins = data;
    });
  }
}
 