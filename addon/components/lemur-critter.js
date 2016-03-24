import Ember from 'ember';
import layout from '../templates/components/lemur-critter';
import Critter from '../components/base-critter';

export default Critter.extend({
  layout: layout,
  bodyColor: "#495867",
  lightContrastColor: "#FFFFFF",
  darkContrastColor: '#0B3648',
  eyeColor: "#f2c66d",
  accentColor: "#9baab9",
  noseColor: "#9baab9"
});
