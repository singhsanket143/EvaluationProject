import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ShortListService} from '../short-list/short-list.service';
import {Injectable} from '@angular/core';
import {SingleCreativeBusinessModel} from './single-creative-business.model';
import {StoryProductionModel} from './story-production.model';
import {BudgetModel} from './budget.model';
import {TestBed} from '@angular/core/testing';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CreativeSelectorService {
  private dummyBudget = new BudgetModel(10, {id: 1, name: 'USD', nameShort: 'USD', order: '', internalIdentifier: ''});
  private dummyShortlist = [new StoryProductionModel(1, 'Alice', '', '',
    {cities: [{name: 'Delhi'}]}, this.dummyBudget, '', false, 100, false)];

  constructor(private httpClient: HttpClient, private shortListService: ShortListService) {
  }

  getShortlist(id: number) {
    return this.httpClient.get('/shortlists/' + id).subscribe(
      (shortlists: [any]) => {
        const finalShortList = [];
        for (const shortList of this.dummyShortlist) {
          let newShortList;
          if (shortList.hasOwnProperty('StoryAndProduction')) {
            newShortList = new SingleCreativeBusinessModel(shortList, false, false);
          } else {
            // newShortList = new CombinationCreativeBusinessModel(shortList, true, false);
          }
          finalShortList.push(shortList);
        }
        this.shortListService.setShortList(finalShortList);
        return finalShortList;
      }
    );
  }

  getDummyShortList() {
    return this.dummyShortlist;
  }

  getDummyBudget() {
    return this.dummyBudget;
  }
}

describe('CreativeSelectorService', () => {
  let service: CreativeSelectorService;
  beforeEach(() => {
    service = new CreativeSelectorService(null, null);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  });

  it('should return an Observable', () => {
    spyOn(service, 'getShortlist').and.callFake(() => {
      return Observable.from([[1, 2, 3]]);
    });
  });
  it('should return dummy shortlist', () => {
    spyOn(service, 'getDummyShortList').and.returnValue(Array);
  });
  it('should return dummy budget', () => {
    spyOn(service, 'getDummyBudget').and.returnValue(Array);
  });
});
