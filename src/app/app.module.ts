import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AFolderStructureComponent } from './a-folder-structure/a-folder-structure.component';
import { BModulesComponent } from './b-modules/b-modules.component';
import { CDecoratorsComponent } from './c-decorators/c-decorators.component';
import { DHostListnersComponent } from './d-host-listners/d-host-listners.component';

@NgModule({
  declarations: [
    AppComponent,
    AFolderStructureComponent,
    BModulesComponent,
    CDecoratorsComponent,
    DHostListnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
