import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNotificationComponent } from './pages/create-notification/create-notification.component';
import { NotificationsRoutingModule } from './notifications-routing.module';


@NgModule({
  declarations: [
    CreateNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule {
}
