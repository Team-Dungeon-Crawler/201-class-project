var allMonster = [];

function Monster(name, health, attack, monsterId, description) {

  this.name = name;
  this.health = health;
  this.attack = attack;
  this.monsterId = monsterId;
  this.description = description;
  allMonster.push(this)
}

// Monster.prototype.displayDescription

var goblinDescription = 'A small green vile creature stands before you, and it engages you in combat with a spear!';
var bossDescription = 'A pale wizard with sunken eyes in a pitch black robe glares at you with murderous intent as he invokes arcane forces which may spell your DOOM!';

var goblin1 = new Monster('Goblin', 15, 30, 'goblin1', goblinDescription);
var goblin2 = new Monster('Goblin', 15, 30, 'goblin2', goblinDescription);
var boss = new Monster('Evil Wizard', 75, 50, 'boss', bossDescription);