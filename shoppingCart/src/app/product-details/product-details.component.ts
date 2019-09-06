import { Component, OnInit } from '@angular/core';
import { productList } from '../shoppingData/product-data'; 
import { product } from '../shoppingData/productDataType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: product;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productList[+params.get('productId') - 1];
    });
  }

}
