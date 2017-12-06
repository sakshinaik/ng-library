import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DialogModule} from "./modules/dialog/index";
import {DialogService} from "./modules/dialog/dialog.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DialogModule.forRoot()
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
