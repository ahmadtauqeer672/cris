import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavUserClickOptionComponent } from './side-nav-user-click-option/side-nav-user-click-option.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SideNavUserClickOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SideNavUserClickOptionComponent]
})
export class AppModule { }
