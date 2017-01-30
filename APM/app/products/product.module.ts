//External Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

//Feature components and objects
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';

//Services
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

//Module declaration
@NgModule({
  imports: [ 
      SharedModule,
      RouterModule.forChild([
          {path: 'products', component: ProductListComponent},
          {path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent}
      ]) 
  ],
  declarations: [ 
      ProductListComponent,
      ProductDetailComponent,
      ProductFilterPipe
  ],
  providers: [ ProductService, ProductDetailGuard ]
})
export class ProductModule { }
