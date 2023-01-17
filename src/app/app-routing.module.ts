import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cryptocurrencies', pathMatch: 'full' },
  { path: 'cryptocurrencies', component: CoinListComponent },
  { path: 'exchanges/:id', component: CoinDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
