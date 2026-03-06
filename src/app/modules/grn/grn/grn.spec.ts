import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grn } from './grn.component';

describe('Grn', () => {
  let component: Grn;
  let fixture: ComponentFixture<Grn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grn],
    }).compileComponents();

    fixture = TestBed.createComponent(Grn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
