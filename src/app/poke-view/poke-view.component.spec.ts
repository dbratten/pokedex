import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeViewComponent } from './poke-view.component';

describe('PokeViewComponent', () => {
  let component: PokeViewComponent;
  let fixture: ComponentFixture<PokeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
