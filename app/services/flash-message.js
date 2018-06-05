import Service from '@ember/service';
import { A as emberA } from '@ember/array';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('queue', emberA());
    this.clear();
  },

  add(message) {
    return this.get('queue').pushObject(message);
  },

  remove(message) {
    this.get('queue').removeObject(message);
  },

  clear() {
    this.get('queue').clear();
  }
});
