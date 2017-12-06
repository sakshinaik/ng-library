import { Component, OnInit} from '@angular/core';
import {DialogService} from "./modules/dialog/dialog.service";

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dialogService: DialogService){
  }
  ngOnInit(){
    setTimeout(()=> {
      this.dialogService.popup('<b>Acces </b> <br> You do not have permission to access /sawaya/denver. ', "check", "green");

    }, 0);

  }
}
