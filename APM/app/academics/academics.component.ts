// import { Component, OnInit } from '@angular/core';
// import { IClass } from './class';
// import { DataService } from './services/data.service';

// @Component({
//     selector: 'academics',
//     moduleId: module.id,
//     templateUrl: 'academics.component.html',
//     styleUrls: ['academics.component.css']
// })
// export class AcademicComponent implements OnInit { 
    
//     pageTitle: string = "Academics";
//     errorMessage: string;
//     products: IProduct[];

//     constructor(private _productService: ProductService) {
//     }

//     toggleImage():void {
//         this.showImage = !this.showImage;
//     };

//     ngOnInit(): void {
//         this._productService.getProducts()
//             .subscribe(products => this.products = products, error => this.errorMessage = <any>error);
//     };

//     onRatingClicked(message: string): void {
//         this.pageTitle = 'Product List: ' + message;
//     }

// }