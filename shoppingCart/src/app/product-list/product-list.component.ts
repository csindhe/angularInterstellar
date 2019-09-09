import { Component, OnInit } from '@angular/core';
import { product } from '../shoppingData/productDataType';
import { productList } from '../shoppingData/product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: product[] = productList;

  constructor() { }

  ngOnInit() {
    //this.products = productList;
  }

  share() {
    alert("The product has been shared.");
  }

  onNotify() {
    alert("You will be notified when the product goes on sale.");
  }

}
