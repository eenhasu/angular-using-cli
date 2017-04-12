import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Iron Man'},
      { id: 12, name: 'Torr'},
      { id: 13, name: 'Spyder Man'},
      { id: 14, name: 'Bat Man'},
      { id: 15, name: 'Aqua Man'},
      { id: 16, name: 'Yunha'},
      { id: 17, name: 'Kill bill'},
      { id: 18, name: 'Cheeze'},
      { id: 19, name: 'Zoro'},
      { id: 20, name: 'Nami'}, 
    ];

    return {heroes};
  }
  constructor() { }

}
