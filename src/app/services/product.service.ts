import { Injectable,PipeTransform } from '@angular/core';

import { Product } from '../entities/product.entity';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators'


@Injectable()
export class ProductService {


    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'name 1', price: 100, photo:'download (1).jpg'},
            { id: 'p05', name: 'name 5', price: 200, photo:'download.jpg' },
            { id: 'p05', name: 'name 5', price: 200, photo:'category_tile_Vases.jpg' },
            { id: 'p02', name: 'name 2', price: 200, photo:'OIP (2).jpg' },
            { id: 'p03', name: 'name 3', price: 300, photo:'OIP (3).jpg' },
            { id: 'p04', name: 'name 4', price: 100, photo:'OIP (4).jpg' },
            { id: 'p05', name: 'name 5', price: 200, photo:'OIP (5).jpg' },
            { id: 'p06', name: 'name 6', price: 200, photo:'OIP (6).jpg' },
            { id: 'p07', name: 'name 7', price: 200, photo:'OIP (7).jpg' },
            { id: 'p08', name: 'name 8', price: 200, photo:'OIP (8).jpg' },
            { id: 'p09', name: 'name 9', price: 200, photo:'OIP (9).jpg' },
            { id: 'p10', name: 'name 10', price: 200, photo:'OIP (10).jpg' },
            { id: 'p11', name: 'name 11', price: 200, photo:'OIP (11).jpg' },
            { id: 'p12', name: 'name 12', price: 300, photo:'OIP (12).jpg'}
        ];
        
    }

    

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    
}