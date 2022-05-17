import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './pages/company/company.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    LayoutModule
  ]
})
export class CompanyModule {
}
