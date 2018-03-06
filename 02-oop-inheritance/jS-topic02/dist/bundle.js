module.exports = class Actor {

  constructor(nombre, edad) {
    this.name = nombre;
    this.age = edad;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  changeName(newname) {
    this.name = newname;
  }

  changeAge(newage) {
    this.age = newage;
  }
};
"use strict";

module.exports = class EventEmitter {

    constructor() {
        this.listeners = new Map();
    }
    on(eventName, callback) {
        this.listeners.has(eventName) || this.listeners.set(eventName, []);
        this.listeners.get(eventName).push(callback);
    }

    off(eventName, callback) {
        let listeners = this.listeners.get(eventName),
            index;

        if (listeners && listeners.length) {
            index = listeners.reduce((i, listener, index) => {
                return isFunction(listener) && listener === callback ? i = index : i;
            }, -1);

            if (index > -1) {
                listeners.splice(index, 1);
                this.listeners.set(eventName, listeners);
                return true;
            }
        }
        return false;
    }
    emit(eventName, ...args) {
        let listeners = this.listeners.get(eventName);

        if (listeners && listeners.length) {
            listeners.forEach(listener => {
                listener(...args);
            });
            return true;
        }
        return false;
    }
};
"use strict";

module.exports = class Logger {
  constructor(id, subject) {
    //Subject param in this case will correspond to "playbutton"'s id
    this.id = id;
    this.subject = subject;
  }

  log(info) {
    console.log(this.subject + " has been pushed!");
  }
};
"use strict";

const EventEmitter = require('./EventEmitter');

module.exports = class Movie extends EventEmitter {
  constructor(title, year, duracion) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duracion;
    this.actors = [];
  }

  addCast(actorslist) {
    for (let i = 0; i < actorslist.length; i++) {
      this.actors.push(actorslist[i]);
    }
  }

  getCast() {
    return this.actors;
  }

  getTitle() {
    return this.title;
  }

  getYear() {
    return this.year;
  }

  getDuration() {
    return this.duration;
  }

  play() {
    console.log("Play Movie");
  }

  pause() {
    console.log("Pause Movie");
  }

  resume() {
    console.log("Resume Movie");
  }

};
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes*/

import Actor from "js/Actor.js";
import Logger from "js/Logger.js";
import event_emitter from "js/EventEmitter.js";
import Movie from "js/Movie.js";

let taxid = new Movie("Interstellar", 2014, "3h 0m");

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
const logger = new Logger();

terminator.addCast(arnold);
terminator.addCast(actors);
terminator.on("play", logger.log);
terminator.play();

/* MIXIN */

let social = {
    share(friend_name) {
        console.log(friend_name + " shares " + this.title);
    },
    like(friend_name) {
        console.log(friend_name + " likes " + this.title);
    }
};

const spun = new Movie("Spun", 2002, "1h 41m");

Object.assign(spun, social);

spun.like("Daniel Schaerer");
