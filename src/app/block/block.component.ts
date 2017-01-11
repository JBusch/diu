import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Dice} from "../dices/dice/dice.model";

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  selectedDices$: Observable<Dice[]>;

  constructor(private _store: Store<Dice>) {
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
  }

  ngOnInit() {
  }

}
