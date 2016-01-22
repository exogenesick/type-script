import {Component} from 'angular2/core';

@Component({
    selector: 'main-app',
    template: `
        <h1>Hello {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class Main {
    name: string = 'Spider';
}
