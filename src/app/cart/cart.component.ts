import { Component } from '@angular/core';
/*import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';*/
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  constructor(private cartService: CartService) {}
}
