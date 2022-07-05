import JSONSerializer from '@ember-data/serializer/json';

// Traduce el JSON a Objetos
export default class ApplicationSerializer extends JSONSerializer {
  keyForRelationship(key, relationship) {
    return key + 'Id';
  }
}
