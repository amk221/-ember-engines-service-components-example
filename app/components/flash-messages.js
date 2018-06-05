import { inject } from '@ember/service';
import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
  flashMessageService: inject('flash-message'),
  classNames: ['flash-messages'],
  messages: readOnly('flashMessageService.queue')
});
