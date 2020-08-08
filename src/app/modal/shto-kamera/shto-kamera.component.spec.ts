import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShtoKameraComponent } from './shto-kamera.component';

describe('ShtoKameraComponent', () => {
  let component: ShtoKameraComponent;
  let fixture: ComponentFixture<ShtoKameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShtoKameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShtoKameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
