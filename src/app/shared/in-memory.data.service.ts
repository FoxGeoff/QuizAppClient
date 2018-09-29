import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quizes = [
      { Id: 11, Title: 'Mr. Nice', Description: 'Questions about a nice hero' },
      { Id: 12, Title: 'Narco', Description: 'Questions about a drug hero' },
      { Id: 13, Title: 'Bombasto', Description: 'Questions about a braging hero' },
      { Id: 14, Title: 'Celeritas', Description: 'Questions about a well known hero' },
      { Id: 15, Title: 'Magneta', Description: 'Questions about a magnetic hero' },
      { Id: 16, Title: 'RubberMan', Description: 'Questions about a flexable hero' },
      { Id: 17, Title: 'Dynama', Description: 'Questions about a dunamic hero' },
      { Id: 18, Title: 'Dr IQ', Description: 'Questions about a smart hero' },
      { Id: 19, Title: 'Magma', Description: 'Questions about a flowing hero' },
      { Id: 20, Title: 'Tornado', Description: 'Questions about a windy hero'}
    ];
    return { quizes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(quizes: Quiz[]): number {
    return quizes.length > 0 ? Math.max(...quizes.map(quiz => quiz.Id)) + 1 : 11;
  }
}
