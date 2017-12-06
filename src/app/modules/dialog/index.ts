import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogComponent} from './dialog.component';
import {DialogService} from "./dialog.service";
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSnackBarModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatSnackBarModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [DialogComponent],
    exports: [
        MatCardModule,
        MatSnackBarModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        DialogComponent
    ],
    providers: [

    ],
    entryComponents: [
        DialogComponent,
    ]
})
export class DialogModule {
    static forRoot() {
        return {
            ngModule: DialogModule,
            providers: [ DialogService ]
        }
    }

}
