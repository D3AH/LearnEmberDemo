import RESTAdapter from '@ember-data/adapter/rest';

// RESTAdapter => Trabajar con JSON convencional.
// {
//   id: 1,
//   nombre: 'Diego',
//   father: 1
// }

// JSONAPIAdapter => Trabja con la especificaoin de JSON api
// {
//   id: 1,
//   data: {
//     attributes: {
//       nombre: 'Diego'
//     },
//     relationchips: {
//       father : {
//         id: 1,
//         type: 'Person'
//       }
//     }
//   }
// }

// Un adapter arma las peticiones WEB a la API de acuerdo a lo que le solicite la store.
// https://api.emberjs.com/ember-data/release/classes/RESTAdapter
export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://jsonplaceholder.typicode.com'; // localhost:4200
}
