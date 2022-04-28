import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotificationComponent } from './pages/create-notification/create-notification.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}
