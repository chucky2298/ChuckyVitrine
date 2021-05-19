import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasriComponent } from './masri.component';

describe('MasriComponent', () => {
  let component: MasriComponent;
  let fixture: ComponentFixture<MasriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
