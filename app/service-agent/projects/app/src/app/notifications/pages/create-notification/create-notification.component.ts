import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'din-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
