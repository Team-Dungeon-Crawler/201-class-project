function Monster(name, health, attack, monsterId, description) {

  this.name = name;
  this.health = health;
  this.attack = attack;
  this.monsterId = monsterId;
  this.description = description;
  allMonsters.push(this)
}

Monster.prototype.monsterDeath = function() {
  for (var i = 0; i < allMonsters.length; i++) {
    if (this.monsterId === allMonsters[i].monsterId) {
    allMonsters.splice(i, 1);
    console.log(allMonsters)
    var removeMonsterCell = document.getElementById(this.monsterId);
    removeMonsterCell.removeAttribute("id");
    roomDetect();

    if (allMonsters.length <= 0) {
      victoryDisplay();
    }
    }
  }
}

