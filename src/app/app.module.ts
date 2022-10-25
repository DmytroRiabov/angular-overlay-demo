import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalModule } from './shared/modal/modal.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ModalModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
