import { Component, OnInit } from '@angular/core';
import { Product} from '../../app/entities/product.entity'
import { ProductService } from '../../app/services/product.service';

@Component({
  selector: 'app-potfolio',
  templateUrl: './potfolio.component.html',
  styleUrls: ['./potfolio.component.css']
})
export class PotfolioComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

}