import { Component, OnInit ,PipeTransform} from '@angular/core';
import { Product} from '../../app/entities/product.entity'
import { ProductService } from '../../app/services/product.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //providers : [DecimalPipe]
})

export class ProductComponent implements OnInit {

  products:Product[];
  //filter = new FormControl('');
  constructor(
    private productService: ProductService)
    //pipe: DecimalPipe)//
    {}
   

  ngOnInit() {
    
    this.products = this.productService.findAll();
    
    /*function search(text: string, pipe: PipeTransform): Product[] {
      return this.products.filter(Product => {
        const term = text.toLowerCase();
        return Product.id.toLowerCase().includes(term)
            || pipe.transform(Product.name).includes(term)
            || pipe.transform(Product.price).includes(term);
      });
    this.products= this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.productService.search(text,pipe))
    );*/
    
  
  }

  }
