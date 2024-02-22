import { Component } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grile-project';

  ngOnInit(){
    let xhr = new XMLHttpRequest();
// load `document` from `cache`
xhr.open('GET', '../assets/exx.pdf', true);
xhr.responseType = 'blob';
xhr.onload = function (e) {
  if (this.status === 200) {
    // `blob` response
    var file = window.URL.createObjectURL(this.response);
    document.querySelector('iframe').src = file;
  }
};
xhr.send();
  }
	
}


