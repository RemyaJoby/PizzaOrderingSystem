import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { products } from '..app/products'; 
import { Offer } from '..app/Offer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  displayedColumns: string[] = ['toppings', 'small', 'medium', 'large', 'extraLarge'];
  dataSource = [...products];
  selectedCells = new Set<string>();
  selectedOffer = '';
  selectedProductTotalCost= 0;
  offers: Offer[] = [...this.offers];
  selectedProducts = new Set<string>();

  selectProduct(prodName: string, size: string, price: number): void {
    if (!prodName || !size || !price || prodName === 'Offer') {
      return;
    }
    if (this.isSelected(prodName, size, price)) {
      this.selectedCells.delete(JSON.stringify({ prodName, size, price }));
    } else {
      this.selectedCells.add(JSON.stringify({ prodName, size, price }));
    }
  }
  isSelected(prodName: string, size: string, price: number): boolean {
    return this.selectedCells.has(JSON.stringify({ prodName, size, price }));
  }
   
  calculateSelectionCost(): number {
    let total = 0;
    let cost = 0;
    let orderlist = new Set<string>();

    for (let sel of this.selectedCells) {
      if (JSON.parse(sel).size === 'small') {
        orderlist.add('small');
      }
      if (JSON.parse(sel).size === 'medium') {
        orderlist.add('medium');
      }
      if (JSON.parse(sel).size === 'large') {
        orderlist.add('large');
      }
      if (JSON.parse(sel).size === 'extraLarge') {
        orderlist.add('extraLarge');
      }
      total += +JSON.parse(sel).price
    }

    for (let order of orderlist) {
      if (order === 'small') {
        cost += 5;
      }
      if (order === 'medium') {
        cost += 7;
      }
      if (order === 'large') {
        cost += 8;
      }
      if (order === 'extraLarge') {
        cost += 9;
      }
      total += cost;
    }
    let selectedProductTotalCost = total
    let selectedProducts = orderlist;
    
  }
  applyOfferAndfindTotal(name:string, price:number){
  //apply offer here
  if(name== '')
  this.selectedProductTotalCost
  else
     this.selectedProductTotalCost += price;
  }
  
}