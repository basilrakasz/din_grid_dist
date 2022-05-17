import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'din-page-layout-simple-fullwidth',
  templateUrl: './page-layout-simple-fullwidth.component.html',
  styleUrls: ['./page-layout-simple-fullwidth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutSimpleFullwidthComponent {
  @Input()
  title: string;
}
