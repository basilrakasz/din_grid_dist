import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'din-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
