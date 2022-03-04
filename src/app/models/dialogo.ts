import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'confirmar-exclusao',
    //Refenciando o html que possui o dialog
    templateUrl: '/app/dialog.html',
})

export class Dialogo {
    
    constructor(public dialog: MatDialog) {}

    openDialog() {
        this.dialog.open(Dialogo, {disableClose: false});
    }
}
