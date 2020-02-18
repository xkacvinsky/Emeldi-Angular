import { Component, OnInit, Input } from '@angular/core';
import { MockService } from 'src/app/mock.service';

interface TableData{
  addedDate: string;
  status: string;
  start: string;
  end: string;
  count: number;
  approvedM: string;
  approvedD: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columns: any[];
  dataToShow : TableData[];

  @Input() user: string;

  // pomocou servisu vygenereujeme data a nastavime stlpce
  constructor(private svc: MockService) { 
    this.columns = [
      { field: 'addedDate', header: 'Vložené' },
      { field: 'status', header: 'Stav' },
      { field: 'start', header: 'Prvý deň' },
      { field: 'end', header: 'Posledný deň' },
      { field: 'count', header: 'Dni' },
      { field: 'approvedM', header: 'Schválil (M)' },
      { field: 'approvedD', header: 'Schválil (D)' }
    ];
    svc.getUsersData();
  }

  // funkcia na zobrazenie dat pre zadaneho uzivatela
  showUserData(user: string): void { 
    for (let index = 0; index < this.svc.usersData.length; index++) {
      if (this.svc.usersData[index]['user'] === user){
        this.dataToShow = this.svc.usersData[index]['data']
        break;
      }
    }
  }
  
  ngOnChanges(): void {
    this.showUserData(this.user);
  }

  ngOnInit(): void {
  }

  removeData(index: number): void{
    this.dataToShow = this.svc.removeUserData(index, this.user);
  }

}
