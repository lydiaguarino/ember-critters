import Ember from 'ember';

export default Ember.Object.extend({
  type: 'owl',
  bodyColor: '#c7ede4',
  noseColor: '#f07464',
  accentColor: '#a0c2bb',
  darkContrastColor: '#0B3648',
  lightContrastColor: '#FFFFFF',
  eyeColor: "#f2c66d",
  isLemur: Ember.computed.equal('type', 'lemur'),
  isSloth: Ember.computed.equal('type', 'sloth'),
  isFox: Ember.computed.equal('type', 'fox'),
  isPenguin: Ember.computed.equal('type', 'penguin'),
  isOwl: Ember.computed.equal('type', 'owl'),
});
