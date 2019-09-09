import { Component, OnInit } from '@angular/core';
import { productList } from '../shoppingData/product-data'; 
import { product } from '../shoppingData/productDataType';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../product-services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: product;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productList[+params.get('productId') - 1];
    });
  }

  addToCart(product) {
    alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }

}
