import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule as NgrxStoreModule} from "@ngrx/store";
import {CounterFeature} from "./counter-slice/counter.slice";
import {initialAppState} from "./AppState";

@NgModule({
  imports: [CommonModule,
    NgrxStoreModule.forRoot(
      {
        counter: CounterFeature.reducer,
      },
      { initialState: initialAppState }
    ),],
})
export class StoreModule {}
