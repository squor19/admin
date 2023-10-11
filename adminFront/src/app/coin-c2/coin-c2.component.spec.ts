import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinC2Component } from './coin-c2.component';

describe('CoinC2Component', () => {
  let component: CoinC2Component;
  let fixture: ComponentFixture<CoinC2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinC2Component]
    });
    fixture = TestBed.createComponent(CoinC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
