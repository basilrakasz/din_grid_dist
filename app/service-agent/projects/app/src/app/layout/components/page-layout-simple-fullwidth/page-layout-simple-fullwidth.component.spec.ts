import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutSimpleFullwidthComponent } from './page-layout-simple-fullwidth.component';

describe('PageLayoutSimpleFullwidthComponent', () => {
  let component: PageLayoutSimpleFullwidthComponent;
  let fixture: ComponentFixture<PageLayoutSimpleFullwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLayoutSimpleFullwidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutSimpleFullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
