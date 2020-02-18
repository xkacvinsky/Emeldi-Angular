import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MockService } from 'src/app/mock.service';


interface Users {
  name: string;
}

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  //reaktivny formular
  selectForm = new FormGroup({
    team: new FormControl(''),
    user: new FormControl(''),
    firstDay : new FormControl(''),
    secondDay : new FormControl(''),
    firstDayPart : new FormControl(''),
    secondDayPart : new FormControl('')
  });

  //dotiahneme do servisu data userov
  constructor(public svc:MockService) {
    svc.getUsers();
    svc.getTeams();
  }

  usersToShow : Users[];
  show : boolean= false;
  choosenTeam:string;
  choosenUser:string;
  shareUser:string;
  showUser: string;
  showTeam: string;
  

  // pomocou reaktivneho formulara zistim ktory uzivatel je zvoleny
  ngOnInit(): void {
    this.selectForm.get('team').valueChanges.subscribe(value => {
      if (value['name'] === 'Všetci uživatelia')
        this.usersToShow = this.svc.users;
      else {
        let dataToChoose = [];
        for (let index = 0; index < this.svc.users.length; index++) {
          const element = this.svc.users[index];
          if (element['team'] === value['name']) {
            dataToChoose.push(element)
          }
        }
        this.usersToShow = dataToChoose;
      }
    });

    this.selectForm.get('user').valueChanges.subscribe(value => {
      for (let index = 0; index < this.svc.users.length; index++) {
        const element = this.svc.users[index];
        if (element['name'] === value['name']) {
          this.choosenTeam = element['team'];
        }
      }
      this.choosenUser = value['name'];
    });
  }

  onSubmit(){
    this.show = true;
    this.showUser = this.choosenUser;
    this.showTeam = this.choosenTeam;
    this.shareUser = this.choosenUser;
  }
  
}
