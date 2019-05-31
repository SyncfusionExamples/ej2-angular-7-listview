import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListViewModule, VirtualizationService } from '@syncfusion/ej2-angular-lists';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListViewModule
  ],
  providers: [VirtualizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
