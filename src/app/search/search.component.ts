import { Component, OnInit } from '@angular/core';
import { OnChanges, Input, Output,EventEmitter } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFilter:string="";
  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onClickSearch():void{
    this.searchClicked.emit(this.searchFilter);
  }
}
