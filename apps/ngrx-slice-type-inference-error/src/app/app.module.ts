import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {StoreModule} from "@ngrx-slice-type-inference-error/store";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, StoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
