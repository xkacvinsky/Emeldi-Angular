import { Component } from '@angular/core';


interface NavigateMenu {
  menuName: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-projekt';
  navigateMenu: NavigateMenu[];
 
  constructor() {
    this.navigateMenu = [
      { menuName: 'INFO', path: '/info' },
      { menuName: 'SPRÁVY',  path: '/messages'},
      { menuName: 'DOMOV',  path: '/home'}
    ];
  }

}
