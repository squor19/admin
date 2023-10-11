import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinC3Component } from './coin-c3.component';

describe('CoinC3Component', () => {
  let component: CoinC3Component;
  let fixture: ComponentFixture<CoinC3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinC3Component]
    });
    fixture = TestBed.createComponent(CoinC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
