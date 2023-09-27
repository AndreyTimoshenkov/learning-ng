import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'learning-ng';
	onHeaderClick() {
		console.log('onHeaderClick()');
	}
	logKeyEvent(event: Event) {
		console.log(event);
	}
}
