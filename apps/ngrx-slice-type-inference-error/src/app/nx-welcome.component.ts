import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterSelectors} from "@ngrx-slice-type-inference-error/store";

@Component({
  selector: 'ngrx-slice-type-inference-error-nx-welcome',
  template: `
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {

  counter = 0;
  constructor(private store: Store) {}

  ngOnInit(): void {
   this.store.select(CounterSelectors.selectCounter).subscribe(counter => this.counter = counter);
    console.log(this.counter);
  }
}
