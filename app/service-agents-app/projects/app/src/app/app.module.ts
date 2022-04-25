import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/components/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { UserService } from './user/services/user.service';
import { appConfig } from './core/config/app.config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FuseModule,
    // TODO move config somewhere else
    FuseConfigModule.forRoot(appConfig),
    CoreModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(userService: UserService) {
    // TODO better place?
    userService.get()
      .subscribe();
  }
}
