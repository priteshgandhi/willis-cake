import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeGridUiComponent } from './cake-grid-ui.component';

describe('CakeGridUiComponent', () => {
  let component: CakeGridUiComponent;
  let fixture: ComponentFixture<CakeGridUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeGridUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeGridUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
