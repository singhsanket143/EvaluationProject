import {HttpClient} from '@angular/common/http';
import {ShortListService} from '../short-list/short-list.service';
import {Injectable} from '@angular/core';
import {SingleCreativeBusinessModel} from './single-creative-business.model';
import {StoryProductionModel} from './story-production.model';
import {BudgetModel} from './budget.model';

@Injectable()
export class CreativeSelectorService {
  private dummyBudget = new BudgetModel(10, {id: 1, name: 'USD', nameShort: 'USD', order: '', internalIdentifier: ''});
  private dummyShortlist = [new StoryProductionModel(1, 'Alice', '', '',
    {cities: [{name: 'Delhi'}]}, this.dummyBudget, '', false, 100, false)];

  constructor(private httpClient: HttpClient, private shortListService: ShortListService) {
  }

  getShortlist(id: number) {
    this.httpClient.get<[any]>('/shortlists/' + id).subscribe(
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
