import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
    selector: 'auth-remember', 
    template: `
        <label>
            <input type="checkbox" 
            (change)="onChecked($event.target.checked)">
            Keep me logged 
        </label>
    ` 
})

export class AuthRemember {

@Output()
checked:EventEmitter<boolean> = new EventEmitter(); 

onChecked(value:boolean) {
    console.log("ce tama", value)
    this.checked.emit(value)
}
    
}