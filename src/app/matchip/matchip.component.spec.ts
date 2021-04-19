import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchipComponent } from './matchip.component';

describe('MatchipComponent', () => {
  let component: MatchipComponent;
  let fixture: ComponentFixture<MatchipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
