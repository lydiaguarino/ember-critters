import Ember from 'ember';
import layout from '../templates/components/penguin-critter';
import Critter from '../components/base-critter';

export default Critter.extend({
  layout: layout,
  bodyColor: '#495867',
  noseColor: '#f07464',
  accentColor: '#f07464',
  darkContrastColor: '#0B3648',
  lightContrastColor: '#FFFFFF',
  jump: Ember.computed('moving', function(){
    if (this.get('moving')){
      return 'translate(0,-5)';
    } else {
      return 'translate(0, 10)';
    }
  }),
  inspect: Ember.computed('speaking', 'blinking', function(){
    if (this.get('speaking')){
      return 'rotate(15 110,65)';
    } else if (this.get('blinking')){
      return 'rotate(-15 110,65)';
    }
  })
});
