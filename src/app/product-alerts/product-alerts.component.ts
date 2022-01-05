import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// export class ProductAlertsComponent implements OnInit {
export class ProductAlertsComponent {
  // @Input() product!: Product;

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
