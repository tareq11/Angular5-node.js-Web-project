import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSitesComponent } from './multiSites.component';

describe('multiSites', () => {
  let component: MultiSitesComponent;
  let fixture: ComponentFixture<MultiSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
