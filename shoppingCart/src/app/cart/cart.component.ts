import { Component, OnInit } from '@angular/core';
import { CartService } from '../product-services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  clearCart() {
    this.items = this.cartService.clearItems();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearItems();
    this.checkoutForm.reset();
  }

}
