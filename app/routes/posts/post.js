import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class PostsPostRoute extends Route {
  @service('store') store;
  @service('router') router;

  model({ id }) {
    // This is use the cache of store to get the resoure.
    // return this.store.pekRecord('post', id);

    // This method will synchronously return the record if it is available in the store, otherwise it will return null.
    // A record is available if it has been fetched earlier, or pushed manually into the store.
    // https://api.emberjs.com/ember-data/release/classes/Store/methods/peekRecord?anchor=peekRecord
    return this.store.peekRecord('post', id);
  }

  @action
  error(error, transition) {
    if (error.status === '403') {
      this.router.replaceWith('login');
    } else {
      // Let the route above this handle the error.
      this.router.transitionTo('application');
    }
  }
}
