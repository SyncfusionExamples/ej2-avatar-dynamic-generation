import { Component, AfterViewInit } from '@angular/core';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  public hash: string;
  public avatar: string;
  constructor() {
    // Initially generate Identicon
    this.hash = SparkMD5.hash('blog@syncfusion.com');
    this.createIdenticon(this.hash);
  }

  ngAfterViewInit() {

  }
  // Email input focusout event handler
  onFocusOut(event: any) {
    const email: string = event.target.value;
    if (email) { // Get the textbox value
      this.hash = SparkMD5.hash(email); // Generate hash value
      this.createIdenticon(this.hash); // Create identicons
    }
  }

  createIdenticon(emailHash: string) {
    this.avatar = 'https://www.gravatar.com/avatar/' + emailHash + '?d=identicon'; // request gravatar to generate identicons
  }
}
