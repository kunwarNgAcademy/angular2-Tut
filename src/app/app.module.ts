import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AtrrComponent } from './atrr/atrr.component';
import { ClsComponent } from './cls/cls.component';
import { InputeventComponent } from './inputevent/inputevent.component';
import { FormmodelComponent } from './formmodel/formmodel.component';
import { NgifpracComponent } from './ngifprac/ngifprac.component';
import { StylePrcComponent } from './style-prc/style-prc.component';
import { ForloopComponent } from './forloop/forloop.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AtrrComponent,
    ClsComponent,
    InputeventComponent,
    FormmodelComponent,
    NgifpracComponent,
    StylePrcComponent,
    ForloopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
