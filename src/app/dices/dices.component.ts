import {Component, OnInit, Input, ViewChild, SimpleChanges, ElementRef, AfterViewInit} from '@angular/core';
import {Dice} from './dice/dice.model';
import {DiceService} from './dices.service';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs";
// import {GameService} from '../../services/game.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import {DicesActions} from "./dices.actions";

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent implements OnInit {
  element: ElementRef;
  @Input() dices: Dice[];
  selectedDices: Dice[];
  // maxRolls: number = this.game.getRollCount();

  constructor(/*private dices: DiceService,*/
              /*private game: GameService,*/
              private _store: Store<any>,
              private dicesActions: DicesActions) {
  }

  ngOnChanges() {
  }

  // ngDoCheck() {
  //   this.dices$ = this.dices.getDiceCupDices();
  // }
  //
  ngOnInit() {
    // console.log(this.dices$.subscribe(dice => console.log(dice)));
    // this.dices$.map(state => state.dices).subscribe(dice => console.log(dice));
    // this.dices$ = this.dices.getDiceCupDices();
  }

  // increaseRollCount() {
  //   return this.game.increaseRollCount();
  // }

  // selectDice(dice) {
  //   this.dices.selectDice(dice);
  // }
  //
  // unSelectDice(dice) {
  //   this.dices.unSelectDice(dice);
  // }
  //
  // isDiceSelected(dice) {
  //   this.selectedDices.filter((element) => {
  //     return element.id === dice.id;
  //   });
  // }

  // ngAfterViewInit() {
  //   const hostElement = this.element.nativeElement;
  // }

  rollDice() {
    this._store.dispatch(this.dicesActions.ROLLDICE());
  }


}
