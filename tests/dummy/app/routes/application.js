import Ember from 'ember';
import Critter from '../models/critter';

export default Ember.Route.extend({
  model: function(){
    return new Critter();
  },
  actions: {
    setCritter(critter) {
      var morphCritter = this.controller.get('model');
      morphCritter.set('type', critter);
    },
    reset() {
      let freshCritter = new Critter();
      this.controller.set('model', freshCritter);
    }
  }
});
