import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'din-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {
  }
}
