import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeSelectorComponent } from './creative-selector.component';

describe('CreativeSelectorComponent', () => {
  let component: CreativeSelectorComponent;
  let fixture: ComponentFixture<CreativeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
