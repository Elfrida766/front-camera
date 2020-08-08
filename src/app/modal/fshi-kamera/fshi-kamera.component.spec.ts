import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FshiKameraComponent } from './fshi-kamera.component';

describe('FshiKameraComponent', () => {
  let component: FshiKameraComponent;
  let fixture: ComponentFixture<FshiKameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FshiKameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FshiKameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
