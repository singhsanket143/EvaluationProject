import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeSelectorComponent } from './creative-selector.component';
import {HttpClientModule} from '@angular/common/http';
import {ShortListService} from './short-list/short-list.service';
import {CreativeSelectorService} from './shared/creative-selector.service';
import 'rxjs/add/observable/from';
import {Observable} from 'rxjs/Observable';
describe('CreativeSelectorComponent', () => {
  let component: CreativeSelectorComponent;
  let fixture: ComponentFixture<CreativeSelectorComponent>;
  let creativeSelectorService: CreativeSelectorService;
  let shortListService: ShortListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeSelectorComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [ShortListService, CreativeSelectorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    creativeSelectorService = new CreativeSelectorService(null, null);
    shortListService = new ShortListService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ask to add creatives to shortlist', () => {
    spyOn(creativeSelectorService, 'getShortlist').and.callFake((id: number) => {
      return Observable.from([{
        StoryAndProduction: {
          id: 1,
          name: 'xyz',
          profile_photo: 'img',
          profile_url: 'img'
        }
      }]);
    });
    component.getShortList(1);
    expect(component.shortlist.length).toBe(0);
  });
});
