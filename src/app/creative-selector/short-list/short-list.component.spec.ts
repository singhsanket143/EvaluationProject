import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Observable} from 'rxjs/Observable';
import { ShortListComponent } from './short-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ShortListService} from './short-list.service';
import {CreativeSelectorService} from '../shared/creative-selector.service';

describe('ShortListComponent', () => {
  let component: ShortListComponent;
  let fixture: ComponentFixture<ShortListComponent>;
  let creativeSelectorService: CreativeSelectorService;
  let shortListService: ShortListService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortListComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [ShortListService, CreativeSelectorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    creativeSelectorService = new CreativeSelectorService(null, null);
    shortListService = new ShortListService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
