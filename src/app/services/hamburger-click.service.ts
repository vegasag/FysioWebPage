import { Injectable, Inject, EventEmitter } from '@angular/core';

@Injectable()
export class HamburgerClickService {
    listenToButtonClick = new EventEmitter();


    clickButton() {
        this.listenToButtonClick.emit();
    }
}