import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShortListService} from './short-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrls: ['./short-list.component.css']
})
export class ShortListComponent implements OnInit, OnDestroy {

  private shortlist: any[];
  private subscription: Subscription;

  constructor(private shortListService: ShortListService) {
  }

  ngOnInit() {
    this.shortlist = this.shortListService.getShortList();
    this.subscription = this.shortListService.shortListChanged.subscribe(
      (shortlist: any[]) => {
        this.shortlist = shortlist;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
