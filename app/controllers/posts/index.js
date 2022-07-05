import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PostsIndexController extends Controller {
  @tracked
  selectedUser = null;

  @action
  showUserInfo(post) {
    // This fail because user is a proxy object.
    // Basically a promise to a object that should be resolved
    // this.user = post.get('user');

    // post.user.then((user) => {
    //   console.log(user);
    //   // this.user = user;
    // })

    // let selectedPost = await post.user;
    this.selectedUser = post.user;
  }
}
