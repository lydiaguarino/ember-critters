import Ember from 'ember';
import layout from '../templates/components/base-critter';

export default Ember.Component.extend({
  layout: layout,
  bodyColor: '#c7ede4',
  noseColor: '#f07464',
  accentColor: '#a0c2bb',
  darkContrastColor: '#0B3648',
  lightContrastColor: '#FFFFFF',
  blinking: false,
  moving: false,
  speaking: false,
  mouseEnter(){
    this.set('moving', true);
  },
  mouseLeave(){
    this.set('moving', false);
  },
  _blink(){
    this.set('blinking', true);
    this.set('speaking', true);
    this.blink = Ember.run.later(this, function(){
      this.set('blinking', false);
    }, 200);
    this.speak = Ember.run.later(this, function(){
      this.set('speaking', false);
    }, 700);
  },
  _move(){
    this.set('moving', true);
    this.move = Ember.run.later(this, function(){
      this.set('moving', false);
    }, 200);
  },
  _scheduleSpeak(){
    this.scheduleSpeak = Ember.run.later(this, function(){
      this._blink();
      this._scheduleSpeak();
    }, (Math.random()*10000));
  },
  _scheduleMove(){
    this.scheduleMove = Ember.run.later(this, function(){
      this._move();
      this._scheduleMove();
    }, (Math.random()*5000));
  },
  didInsertElement(){
    this._scheduleSpeak();
    this._scheduleMove();
  },
  willDestroyElement(){
    console.log('cancel timers');
    Ember.run.cancel(this.scheduleMove);
    Ember.run.cancel(this.scheduleSpeak);
    Ember.run.cancel(this.move);
    Ember.run.cancel(this.blink);
    Ember.run.cancel(this.speak);
  },
  actions: {
    blink() {
      this._blink();
    }
  }
});
