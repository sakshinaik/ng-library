/**
 * Created by s.naik on 7/17/17.
 */
import {Observable} from 'rxjs/Rx';
import {MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';
import {Injectable} from '@angular/core';
import {DialogComponent} from "./dialog.component";

@Injectable()
export class DialogService {

    constructor(private dialog: MatDialog,
                private snackBar: MatSnackBar) {
    }

    public throw(message: string): Observable<boolean> {
        let dialogRef: MatDialogRef<DialogComponent>;

        dialogRef = this.dialog.open(DialogComponent);
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.dialogType = 'error';
        dialogRef.componentInstance.icon = 'warning';
        dialogRef.componentInstance.iconColor = 'red';
        dialogRef.componentInstance.messageClass = 'error-div';

        return dialogRef.afterClosed();
    }

    public confirm(message: string, btnOkTxt: string = 'Ok', btnCancelTxt: string = 'Cancel', messageClass : string = null): Observable<boolean> {

        let dialogRef: MatDialogRef<DialogComponent>;

        dialogRef = this.dialog.open(DialogComponent);
        dialogRef.componentInstance.dialogType = 'confirm';
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.messageClass = messageClass;
        dialogRef.componentInstance.btnOkTxt = btnOkTxt;
        dialogRef.componentInstance.btnCancelTxt = btnCancelTxt;
        dialogRef.componentInstance.needIcon = false;

        return dialogRef.afterClosed();
    }

    public popup(message: string, matIcon: string = null, matIconColor: string = null, messageClass : string = null): Observable<boolean> {

        let dialogRef: MatDialogRef<DialogComponent>;

        dialogRef = this.dialog.open(DialogComponent);
        dialogRef.componentInstance.dialogType = 'popup';
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.messageClass = messageClass;
        dialogRef.componentInstance.icon = matIcon;
        dialogRef.componentInstance.iconColor = matIconColor;
        dialogRef.componentInstance.needIcon = matIcon != null && matIcon != '' ? true : false;

        return dialogRef.afterClosed();

    }

    public loader(message: string, matIcon: string = null, matIconColor: string = null,): MatDialogRef<DialogComponent> {

        let dialogRef: MatDialogRef<DialogComponent>;

        dialogRef = this.dialog.open(DialogComponent, {disableClose: true});
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.dialogType = 'loader';
        dialogRef.componentInstance.icon = matIcon;
        dialogRef.componentInstance.iconColor = matIconColor;
        dialogRef.componentInstance.needIcon = matIcon != null && matIcon != '' ? true : false;

        return dialogRef;

    }

    public flash(message: string, action = null, timer: number = 1500): void {
        this.snackBar.open(message, action, {
            duration: timer,
        });

    }

}