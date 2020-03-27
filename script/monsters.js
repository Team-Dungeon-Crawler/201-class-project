'use strict';

export { Monster };

function Monster(name, health, attack, monsterId, description) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.monsterId = monsterId;
  this.description = description;
}

