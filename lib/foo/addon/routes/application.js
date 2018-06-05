import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  flashMessageService: inject('flash-message'),

  activate() {
    this.get('flashMessageService').add('Flash message from Foo Engine');
  }
});
