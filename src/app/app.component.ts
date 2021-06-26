import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-session';

  public number: number;
  public output: number = 0;

  calculateFibonacci() {
    if (typeof Worker !== 'undefined') {  // OS Thread
      // Create a new
      const worker = new Worker('./app.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.output = data;
      };
      worker.postMessage(this.number);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}