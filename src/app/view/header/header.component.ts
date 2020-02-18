import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/mock.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name : string;
  isMenuVisible : boolean = false;

  constructor(private svc: MockService) { 
    svc.getLoggedUserData();
    this.name = svc.loggedUserName;
  }

  // po kliknuti na nick prihlaseneho uzivatela aby sa trosku posunulo okno
  changePosition(): boolean{
    let whiteCard = document.getElementsByClassName('whiteCard')[0];
    let navBar = document.getElementsByClassName('navigateMenu')[0];
    let x = document.getElementsByTagName('BODY')[0];
    if(this.isMenuVisible){
      whiteCard.setAttribute('style','top: 100px;');  
      navBar.setAttribute('style', 'top: 120px;');
      x.setAttribute('style', 'overflow:hidden;');
    }else{
      whiteCard.setAttribute('style','top: 50px;');
      navBar.setAttribute('style', 'top: 70px;');
      setTimeout(() => { let x = document.getElementsByTagName('BODY')[0];
       x.setAttribute('style', 'overflow:auto;') }, 300); 
    }
    return false;
    
  }
  ngOnInit(): void {
  }

}
