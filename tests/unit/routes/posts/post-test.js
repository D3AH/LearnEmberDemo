import { module, test } from 'qunit';
import { setupTest } from 'demo-ember-data/tests/helpers';

module('Unit | Route | posts/post', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:posts/post');
    assert.ok(route);
  });
});
