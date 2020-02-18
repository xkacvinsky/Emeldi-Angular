import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MockService } from 'src/app/mock.service';

@Component({
  selector: 'app-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.css']
})
export class AddVacationComponent implements OnInit {

  dayParts = ['Morning', 'Afternoon', 'Evening', 'Fullday'];
  firstDate : string;
  seconDate : string;
  firstChoosenDayPart: string;
  secondChoosenDayPart: string;
  showBlock : boolean = false;


  @Input() reaForm: FormGroup;


  constructor(private svc:MockService) {
    
  }

  //opat pomocou reaktivneho formulara ziskame informacie ohladom vybraneho formulara
  ngOnInit(): void {
    this.reaForm.get('firstDay').valueChanges.subscribe(value => {
      this.firstDate = value;
    });
    this.reaForm.get('secondDay').valueChanges.subscribe(value => {
      this.seconDate = value;
    });
    this.reaForm.get('firstDayPart').valueChanges.subscribe(value => {
      this.firstChoosenDayPart = value;
    });
    this.reaForm.get('secondDayPart').valueChanges.subscribe(value => {
      this.secondChoosenDayPart = value;
    });
  }

  //funkcia na zobrazovanie formulara
  showAddForm(): void{
    this.showBlock = true;
  }

  addData(): void{
    if(this.firstDate !== '' && this.seconDate !== '' && this.firstChoosenDayPart !== '' && this.secondChoosenDayPart){
      this.svc.updateUserData(this.firstDate, this.seconDate, this.firstChoosenDayPart, this.secondChoosenDayPart)
    }
  }

  cancelAddForm():void{
  this.firstDate = '';
  this.seconDate = '';
  this.firstChoosenDayPart = '';
  this.secondChoosenDayPart = '';
  this.showBlock = false;
  }

  }

