import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  // id is defined by default
  @attr('string') title;
  @attr('string') body;

  @belongsTo('user') user;
}
