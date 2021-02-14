import { Component } from '@angular/core';
import { APP_TITLE, APP_RUNNING } from './util/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = APP_TITLE;
  content = APP_RUNNING;
}
