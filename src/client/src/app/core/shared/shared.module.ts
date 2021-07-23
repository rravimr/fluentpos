import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './components/table/table.component';
import { DataPropertyGetterPipe } from '../pipes/data-property-getter.pipe';
import { BrandApiService } from '../api/catalog/brand-api.service';
import { CategoryApiService } from '../api/catalog/category-api.service';
import { ProductApiService } from '../api/catalog/product-api.service';
import { CustomerApiService } from '../api/people/customer-api.service';
import { TranslateModule } from '@ngx-translate/core';
import { AccessDenialComponent } from './components/access-denial/access-denial.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ServerErrorComponent,
    PaginationComponent,
    TableComponent,
    DataPropertyGetterPipe,
    AccessDenialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    TranslateModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    BrandApiService, CategoryApiService, ProductApiService,
    CustomerApiService,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PaginationComponent,
    TableComponent,
  ],
})
export class SharedModule {}
