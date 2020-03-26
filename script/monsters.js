'use strict';

export { Monster };

function Monster(name, health, attack, monsterId, description) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.monsterId = monsterId;
  this.description = description;
}

Monster.prototype.monsterDeath = function() {
  var allMonsters = localStorage.getItem('monsters');
  for (var i = 0; i < allMonsters.length; i++) {
    if (this.monsterId === allMonsters[i].monsterId) {
      allMonsters.splice(i, 1);
      console.log(allMonsters);
      var removeMonsterCell = document.getElementById(this.monsterId);
      removeMonsterCell.removeAttribute('id');
      roomDetect();
      console.log('death');
    }
  }
};



