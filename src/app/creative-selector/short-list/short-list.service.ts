import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';

export class ShortListService {
  private shortlist: [any];
  private isIndividual: boolean;
  shortListChanged = new Subject<any>();

  constructor(private httpClient: HttpClient) {
  }

  getShortList() {
    return this.shortlist.slice();
  }
  setShortList(shortList) {
    this.shortlist = shortList;
    this.shortListChanged.next(this.shortlist.slice());
  }
}
