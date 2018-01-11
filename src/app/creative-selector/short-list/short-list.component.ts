import {Component, OnInit} from '@angular/core';
import {ShortListService} from './short-list.service';

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrls: ['./short-list.component.css']
})
export class ShortListComponent implements OnInit {

  shortlist: any[];

  constructor(private shortListService: ShortListService) {
  }

  ngOnInit() {
    this.shortlist = this.shortListService.getShortList();
    this.shortListService.shortListChanged.subscribe(
      (shortlist: any[]) => {
        this.shortlist = shortlist;
      }
    );
  }
}
