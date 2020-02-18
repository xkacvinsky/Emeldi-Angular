import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';     

@Component({
  selector: 'app-navigate-menu',
  templateUrl: './navigate-menu.component.html',
  styleUrls: ['./navigate-menu.component.css']
})
export class NavigateMenuComponent implements OnInit {

  // zafarbenie menu buttonu na ktorom sa nachadzam
  previousIndex : number = 2;

  constructor(private route: ActivatedRoute, private router: Router) {
    
   }

  @Input() items : [];

  ngOnInit(): void {
    
  }
  // preklikavanie cez menu pomocou routers a stylovanie buttonov
  redirect(link : {} ,index : number): boolean{
    if(this.previousIndex !== undefined){
      let li = document.getElementsByClassName('li'+this.previousIndex)[0]
      let a = document.getElementsByClassName('a'+this.previousIndex)[0]
      li.setAttribute('style', 'background-color: white;');
      a.setAttribute('style', 'color: rgba(207, 2, 2, 0.753);');
    }
    let li2 = document.getElementsByClassName('li'+index)[0];
    let a2 = document.getElementsByClassName('a'+index)[0];
    li2.setAttribute('style','background-color:  rgba(207, 2, 2, 0.753);');
    a2.setAttribute('style', 'color: white;');
    this.previousIndex = index;
    this.router.navigate([link['path']]);
    return false;
  }
}
