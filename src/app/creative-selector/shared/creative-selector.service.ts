import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {ShortListService} from '../short-list/short-list.service';
import {Injectable} from '@angular/core';
import {CombinationCreativeBusinessModel} from "./combination-creative-business.model";
import {SingleCreativeBusinessModel} from "./single-creative-business.model";
@Injectable()
export class CreativeSelectorService {

  constructor(private httpClient: HttpClient, private shortListService: ShortListService) {}

  getShortlist(id: number) {
    this.httpClient.get('/shortlists/' + id).subscribe(
      (shortlists: [any]) => {
        const finalShortList = [];
        for (const shortList of shortlists) {
          let newShortList;
          if (shortList.hasOwnProperty('StoryAndProduction')) {
            newShortList = new CombinationCreativeBusinessModel(shortList, false, false);
          } else {
            newShortList = new SingleCreativeBusinessModel(shortList, true, false);
          }
          finalShortList.push(newShortList);
        }
        this.shortListService.setShortList(finalShortList);
      }
    );
  }
}
