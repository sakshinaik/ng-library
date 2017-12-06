/**
 * Created by s.naik on 7/14/17.
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
    selector: 'dialog-box',
    templateUrl: "./dialog.component.html",
    styleUrls: ["./dialog.component.css"],
    encapsulation: ViewEncapsulation.None

})
export class DialogComponent {

    public message: string;
    public dialogType: string;
    public icon: string;
    public iconColor: string;
    public messageClass: string;
    public needCloseBtn: boolean = true;
    public needIcon: boolean = true;

    public btnOkTxt: string;
    public btnCancelTxt: string;

    public constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    }


}
