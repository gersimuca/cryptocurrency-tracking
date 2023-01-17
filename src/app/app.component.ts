import { CurrencyService } from './service/currency.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency: string = "EUR";
  constructor(private currencyService: CurrencyService) {

  }
  sendCurrency(event: string) {
    this.currencyService.setCurrency(event);
  }
}
