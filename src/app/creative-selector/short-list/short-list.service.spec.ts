import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';

@Injectable()

export class ShortListService {
  private shortlist = [];
  private filters = {
    storyType: 'Business',
    productionType: 'Business',
    budget: 0,
    projectLanguage: 'English',
    interactionLanguage: 'English'
  };
  private isIndividual: boolean;
  private insufficientData: boolean
  shortListed: boolean;

  constructor() {
  }

  getShortList() {
    return this.shortlist.slice();
  }

  setShortList(shortList) {
    this.shortlist = shortList;
  }

  sendProposal() {
    if (this.shortlist.length === 0) {
      this.shortListed = false;
      return;
    } else {
      if (this.filters.storyType.length === 0 ||
        this.filters.productionType.length === 0 ||
        this.filters.budget === 0 ||
        this.filters.projectLanguage.length === 0 ||
        this.filters.interactionLanguage.length === 0) {
        this.insufficientData = true;
      } else {
        // Send proposal
      }
    }
  }

  getFilter() {
    return this.filters;
  }

  getInsufficientData() {
    return this.insufficientData;
  }

  getIsIndividual() {
    return this.isIndividual;
  }
}

describe('ShortListService', () => {
  let service: ShortListService;

  beforeEach(() => {
    service = new ShortListService();
  });

  it('should return shortlisted candidates', () => {
    spyOn(service, 'getShortList').and.returnValue(Array);
  });
  it('should return filterd values', () => {
    spyOn(service, 'getFilter').and.returnValue(Array);
  });
});
