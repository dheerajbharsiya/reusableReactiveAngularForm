import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCommonComponent } from './btn-common.component';

describe('BtnCommonComponent', () => {
  let component: BtnCommonComponent;
  let fixture: ComponentFixture<BtnCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
