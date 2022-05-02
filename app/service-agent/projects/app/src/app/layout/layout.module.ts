import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { UserComponent } from './components/user/user.component';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { UserModule } from '../user/user.module';
import { ClassyLayoutComponent } from './components/classy-layout/classy-layout.component';
import { PageLayoutSimpleFullwidthComponent } from './components/page-layout-simple-fullwidth/page-layout-simple-fullwidth.component';


@NgModule({
  declarations: [
    ClassyLayoutComponent,
    LayoutComponent,
    UserComponent,
    PageLayoutSimpleFullwidthComponent
  ],
  imports: [
    CommonModule,
    FuseLoadingBarModule,
    FuseNavigationModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    UserModule
  ],
  exports: [
    LayoutComponent,
    UserComponent,
    PageLayoutSimpleFullwidthComponent
  ]
})
export class LayoutModule {
}
