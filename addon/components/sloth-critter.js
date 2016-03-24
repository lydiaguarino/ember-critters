import Ember from 'ember';
import layout from '../templates/components/sloth-critter';
import Critter from '../components/base-critter';

export default Critter.extend({
  layout: layout,
  bodyColor: '#9baab9',
  accentColor: '#495867',
  darkContrastColor: '#0B3648',
  lightContrastColor: '#FFFFFF',
  inspect: Ember.computed('speaking', 'blinking', function(){
    if (this.get('blinking')){
      return 'rotate(295 110,65)';
    } else {
      return 'rotate(280 110,65)';
    }
  })
});
