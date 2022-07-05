import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostsIndexRoute extends Route {
  // Injecting services
  // @service('toast') notifications;

  @service('store') store;

  model(/* params */) {
    // You can inject your own services, defining in the route class.

    // The router already knows how deal with promises.
    // Usually a promise in the router stop the execution waiting for the promise resolves.???

    return this.store.findAll('post'); // <- This is a promise.
  }

  // -> model
  // -> setupController

  setupController(controller, model) {
    // The result of model() is setted in controller. Every route has a controller.
    super.setupController(...arguments);
  }
}
