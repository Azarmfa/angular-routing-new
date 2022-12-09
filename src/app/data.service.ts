import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  usersList: any[] = [
    {
      id: 1,
      name: 'User1',
      Salary: '10k',
    },
    {
      id: 2,
      name: 'User2',
      Salary: '20k',
    },
    {
      id: 3,
      name: 'User3',
      Salary: '15k',
    },
    {
      id: 4,
      name: 'User4',
      Salary: '12k',
    },
    {
      id: 5,
      name: 'User5',
      Salary: '14k',
    },
  ];

  getusersList() {
    return this.usersList;
  }

  constructor() {}
}
