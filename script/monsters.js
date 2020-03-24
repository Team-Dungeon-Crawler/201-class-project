iplayDeath

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
    }
  }
}

// Monster.prototype.displayCombat = function() {
//   var displayCombatInfoEl = document.getElementById('combat-info')
//   displayCombatInfoEl.innerHTML = '';
//   var displayMonsterDescriptionP = document.createElement('p');
//   displayMonsterDescriptionP.textContent = this.description;
//   displayCombatInfoEl.appendChild(displayMonsterDescriptionP);
//   var displayCombatP = document.createElement('p');
//   displayCombatP.textContent = (targetCharacter.name + ' is damaged by ' + this.name + '\'s Attack roll of ' + monsterRandomAttack + ' resulted in it only having ' +targetCharacter.health+ ' health left ! ' + this.name + ' is damaged by ' + targetCharacter.name + '\'s Attack roll of ' + characterRandomAttack + ' resulted in it only having ' + this.health+ ' health left ! ');
//   displayCombatInfoEl.appendChild(displayCombatP);
// }

// Monster.prototype.battle = function(character) {
//   var targetCharacter = character;
//   var monsterRandomAttack = (Math.ceil(Math.random() * this.attack));
//   var characterRandomAttack = (Math.ceil(Math.random() * targetCharacter.attack));
//   targetCharacter.health = (targetCharacter.health - monsterRandomAttack);
//   this.health = (this.health - characterRandomAttack);

//   if ((targetCharacter.health - monsterRandomAttack) <=0) {
//     deathDisplay();
//   } else if ((this.health - characterRandomAttack) <= 0) {
//     this.monsterDeath();
//   } else if ((this.health - characterRandomAttack) > { 
//     this.displayCombat();
//   }
// }

// function deathDisplay() {
//   var deathScreen = document.getElementsByTagName('body');
//   deathScreen.setAttribute('id', 'deathScreen');
//   deathScreen.innerHTML = "";
//   var deathMessage = document.createElement('h1');
//   deathMessage.setAttribute('id', 'deathMessage');
//   deathMessage.textContent = "You Died";
// }