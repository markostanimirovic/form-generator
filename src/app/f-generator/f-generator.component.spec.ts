import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FGeneratorComponent } from './f-generator.component';

describe('FGeneratorComponent', () => {
  let component: FGeneratorComponent;
  let fixture: ComponentFixture<FGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
