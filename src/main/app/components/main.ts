import {Component} from 'angular2/core';

@Component({
    selector: 'main-app',
    template: `
        <h1>Helddddddddddddlo, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class Main {
    name: string = 'Main App';
}
