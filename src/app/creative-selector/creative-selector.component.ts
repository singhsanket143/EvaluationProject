import {Component, OnInit} from '@angular/core';
import {ShortListService} from './short-list/short-list.service';
import {CreativeSelectorService} from './shared/creative-selector.service';

@Component({
  selector: 'app-creative-selector',
  templateUrl: './creative-selector.component.html',
  styleUrls: ['./creative-selector.component.css']
})
export class CreativeSelectorComponent implements OnInit {

  shortlist: any[] = [];
  constructor(private shortListService: ShortListService,
              private creativeSelectorService: CreativeSelectorService) { }

  ngOnInit() {
  }

  getShortList(id: number) {
    this.creativeSelectorService.getShortlist(id);
    this.shortlist = this.shortListService.getShortList();
    return this.shortlist;
  }

}
