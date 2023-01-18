import { CurrencyService } from './service/currency.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency: string = "EUR";
  constructor(private currencyService: CurrencyService, private router: Router) {

  }

  sendCurrency(event: string) {
    this.currencyService.setCurrency(event);
  }

  goToHomePage() {
    this.router.navigate(["cryptocurrencies"]);
  }
}
