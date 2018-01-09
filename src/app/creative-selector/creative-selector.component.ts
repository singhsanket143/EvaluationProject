import { Component, OnInit } from '@angular/core';
import {ShortListService} from './short-list/short-list.service';

@Component({
  selector: 'app-creative-selector',
  templateUrl: './creative-selector.component.html',
  styleUrls: ['./creative-selector.component.css']
})
export class CreativeSelectorComponent implements OnInit {

  constructor(private shortListService: ShortListService) { }

  ngOnInit() {
  }

  getShortList() {
    this.shortListService.getShortList();
  }

}
