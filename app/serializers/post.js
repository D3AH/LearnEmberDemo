import ApplicationSerializer from './application';

// Extiende automaticamente del la aplicacion porque ya esta definido.
export default class PostSerializer extends ApplicationSerializer {
  // Traduce nombre de propiedades de la API, por ejemplo el API envia userId y nosotros necesitamos que sea user para mantener la convencion dentro de ember.
  // attrs = {
  //   user: 'userId'
  // }
  keyForRelationship(key, relationship) {
    return key + 'Id';
  }
}
