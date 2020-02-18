import { Injectable } from '@angular/core';

interface UserData {
  user: string;
  data: TableData[];
}
interface TableData {
  addedDate: string;
  status: string;
  start: string;
  end: string;
  count: number;
  approvedM: string;
  approvedD: string;
}

interface Users {
  name: string;
  team: string;
}

interface Teams {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockService {

  usersData : UserData[];
  users: Users[];
  teams: Teams[];
  loggedUserName: string;

  constructor() {
    
  }

  // predstavuje dopyt pre uzivatelov 
  getUsers(): void {
    this.users = [
      { name: 'Denis', team: 'Team A' },
      { name: 'Jozo', team: 'Team B' },
      { name: 'Miro', team: 'Team C' },
      { name: 'Štefan', team: 'Team D' },
      { name: 'Paľo', team: 'Team A' },
      { name: 'Jakub', team: 'Team B' },
      { name: 'Paťo', team: 'Team C' },
      { name: 'Rado', team: 'Team D' },
      { name: 'Kamil', team: 'Team A' },
      { name: 'Albert', team: 'Team B' },
      { name: 'Matúš', team: 'Team C' },
      { name: 'Alfonz', team: 'Team D' },
    ];
  }

  // predstavuje dopyt vsetkych teamov
  getTeams(): void {
    this.teams = [
      { name: 'Všetci uživatelia' },
      { name: 'Team A' },
      { name: 'Team B' },
      { name: 'Team C' },
      { name: 'Team D' }];
  }

  // predstavuje dopyt na prihlaseneho uzivatela
  getLoggedUserData (): void {
    this.loggedUserName = 'Denis';
  }

  // odstranenie data uzivatela z tabullky
  removeUserData(indexUser: number, user:string): TableData[] {
    let dataToShow: TableData[];
    for (let index = 0; index < this.usersData.length; index++) {
      if (this.usersData[index]['user'] === user){
        this.usersData[index]['data'].splice(indexUser, 1);
        dataToShow = this.usersData[index]['data'];
        break;
      }
    }
    return dataToShow;
  }

  // pridate dat uzivatela
  updateUserData(firstDate: string , secondDate: string, firstPart: string, secondPart: string): void{
    let date = new Date();
    let splitedFirstDate = firstDate.split('-');
    let splitedSecondDate = secondDate.split('-');
    let status = 'APPROVED_BY_MANAGER';
    let approvedM = 'Martin';
    let approvedD = '-';
    let dayParts = [firstPart, secondPart];
    let dateFirst = new Date(Number(splitedFirstDate[0]), Number(splitedFirstDate[1]), Number(splitedFirstDate[2]))
    let dateSecond = new Date(Number(splitedSecondDate[0]), Number(splitedSecondDate[1]), Number(splitedSecondDate[2]))
    let timeParts = [];

    for (let index = 0; index < dayParts.length; index++) {
      const element = dayParts[index];
      if(element === 'Morning'){
        timeParts.push(6);
      }else if(element === 'Afternoon'){
        timeParts.push(12);
      }
      else if(element === 'Evening'){
        timeParts.push(18);
      }else{
        timeParts.push(0);
      } 
    }
   
    dateFirst.setHours(timeParts[0], 0, 0, 0);
    dateSecond.setHours(timeParts[1], 0, 0, 0);
    
    let dayCount = (Math.abs(dateFirst.getTime() - dateSecond.getTime()) / (1000 * 3600 * 24));       
    if (firstPart=== 'Fullday' || secondPart === 'Fullday') {
      dayCount ++;
    }

    let tmp: TableData = {
      addedDate : date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear(),
      status : status,
      start : splitedFirstDate[2] + '.' + splitedFirstDate[1] + '.' + splitedFirstDate[0] +  ' (' +firstPart +' )',
      end : splitedSecondDate[2] + '.' + splitedSecondDate[1] + '.' + splitedSecondDate[0] + ' ('+ firstPart +' )',
      count : dayCount,
      approvedM : approvedM,
      approvedD : approvedD
      };
    for (let index = 0; index < this.usersData.length; index++) {
      if(this.usersData[index]['user'] === this.loggedUserName){
        this.usersData[index]['data'].push(tmp);
        break;
      }
    } 
  }
   // generovanie random dat uzivatelov s ktorymi mozeme dalej pracovat
  getUsersData(quantum = 10): void {
    let dayParts: { name: string, time: number }[] = [
      { name: 'Morning', time: 6 },
      { name: 'Afternoon', time: 12 },
      { name: 'Evening', time: 18 },
      { name: 'Fullday', time: 0 }
    ];

    let usersDataTmp : UserData[] = [];

    function randomDateGenerator(start: Date, end: Date): Date {
      let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      date.setHours(0, 0, 0, 0);
      return date;
    };

    function formatDate(date: Date): string {
      return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    }

    function randomNumberGenerator() : number{
      return Math.floor(Math.random() * 4);
    }
    
    function roundCorrect(number : number) : number{
      let tmp = number.toString();
      let position = tmp.indexOf('.') + 1;
      if(tmp[position] === '0')
        return Number(tmp.slice(0,position));
      else if(tmp[position] === '2'){
        let newNumber = tmp.slice(0,position + 1) + '5';
        return Number(newNumber)
      }
      else if(tmp[position] === '5'){
        let newNumber = tmp.slice(0,position + 1);
        return Number(newNumber)
      }
      else if(tmp[position] === '7'){
        let newNumber = tmp.slice(0,position + 1) + '5';
        return Number(newNumber)
      }else
      return number;
    } 

    for (let x = 0; x < this.users.length; x++) {  
      let tmp: TableData[] = [];
      for (let y = 0; y < quantum; y++) {
        let addedDate = randomDateGenerator(new Date(2019, 7, 1), new Date());
        let firstDay = randomDateGenerator(addedDate, new Date());
        let lastDay = randomDateGenerator(firstDay, new Date());
        let index1 = randomNumberGenerator()
        let index2 = randomNumberGenerator()
        if(+firstDay === +lastDay){
          do{
            if (index1 === 3 && index2 ===3 ){
              break;
            } else if(index1 < index2){
              break;
            } else{
              index1 = randomNumberGenerator();
              index2 = randomNumberGenerator();
            }
          }while(true);
        }

        let firstDayPart = dayParts[index1];
        let secondDayPart = dayParts[index2];

        firstDay.setHours(firstDayPart['time'], 0, 0, 0);
        lastDay.setHours(secondDayPart['time'], 0, 0, 0);
        
        let status = 'APPROVED_BY_MANAGER';
        let dayCount = (Math.abs(firstDay.getTime() - lastDay.getTime()) / (1000 * 3600 * 24));       
        if (firstDayPart['name'] === 'Fullday' || secondDayPart['name'] === 'Fullday') {
          dayCount ++;
        }
        dayCount = roundCorrect(dayCount);
        let approvedM = 'Martin';
        let approvedD = '-';
        let tmp2: TableData = {
        addedDate : formatDate(addedDate),
        status : status,
        start : formatDate(firstDay) + ' (' + firstDayPart['name'] + ')',
        end : formatDate(lastDay) + ' (' +secondDayPart['name'] + ')',
        count : dayCount,
        approvedM : approvedM,
        approvedD :approvedD
        };
        tmp.push(tmp2);
      }
      let userData : UserData = {
      'user' : this.users[x]['name'],
      'data' : tmp
      };
      
      usersDataTmp.push(userData);
    }
    this.usersData = usersDataTmp;
  }

}
