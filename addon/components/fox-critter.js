import Ember from 'ember';
import layout from '../templates/components/fox-critter';
import Critter from '../components/base-critter';

export default Critter.extend({
  layout: layout,
  bodyColor: '#f07464',
  darkContrastColor: '#0B3648',
  lightContrastColor: '#FFFFFF',
  noseColor: '#0B3648'
});
