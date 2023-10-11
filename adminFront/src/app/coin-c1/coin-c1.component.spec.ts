import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinC1Component } from './coin-c1.component';

describe('CoinC1Component', () => {
  let component: CoinC1Component;
  let fixture: ComponentFixture<CoinC1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinC1Component]
    });
    fixture = TestBed.createComponent(CoinC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
