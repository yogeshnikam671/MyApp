import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    const data = [
      {
        "id": 1,
        "title": "A Product Title",
        "description": "Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit",
        "isChecked": false
      },
      {
        "id": 2,
        "title": "A Product Title",
        "description": "Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit",
        "isChecked": false
      },
      {
        "id": 3,
        "title": "A Product Title",
        "description": "Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit",
        "isChecked": false
      },
      {
        "id": 4,
        "title": "A Product Title",
        "description": "Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit",
        "isChecked": false
      },
      {
        "id": 5,
        "title": "A Product Title",
        "description": "Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit",
        "isChecked": false
      },
      {
        "id": 6,
        "title": "A Product Title",
        "description": "Lorem ipsum fdk fdanflk alait gjialebt nckalitej fkjadliebtna nvkalit",
        "isChecked": false
      }
    ];
    return {data};
  }
}
