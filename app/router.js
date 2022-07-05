import EmberRouter from '@ember/routing/router';
import config from 'demo-ember-data/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('posts', function () {
    // this.route('index'); default, created by ember itself.
    this.route('post', { path: 'post/:id' });
  });
});
