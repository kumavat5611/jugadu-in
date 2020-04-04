import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaCaseComponent } from './corona-case.component';

describe('CoronaCaseComponent', () => {
  let component: CoronaCaseComponent;
  let fixture: ComponentFixture<CoronaCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
