import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products-details',
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit { 
    
    pageTitle: string = "Products Details";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    product: IProduct;

    constructor(private _route: ActivatedRoute, private _router: Router) {
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    };

    onBack(): void {
        this._router.navigate(['/products']);
    };

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}