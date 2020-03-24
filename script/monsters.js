var allMonsters = [];

function Monster(name, health, attack, monsterId, description) {

  this.name = name;
  this.health = health;
  this.attack = attack;
  this.monsterId = monsterId;
  this.description = description;
  allMonsters.push(this)
}

Monster.prototype.battle = function(character) {
var targetCharacter = character;
var monsterRandomAttack = (Math.ceil(Math.random() * this.attack));
var characterRandomAttack = (Math.ceil(Math.random() * targetCharacter.attack));
targetCharacter.health = (targetCharacter.health - monsterRandomAttack);
this.health = (this.health - characterRandomAttack);

if ((targetCharacter.health - monsterRandomAttack) <=0) {
var deathScreen = document.getElementsByTagName('body');
deathScreen.setAttribute('id', 'deathScreen');
deathScreen.innerHTML = "";
var deathMessage = document.createElement('h1');
deathMessage.setAttribute('id', 'deathMessage');
deathMessage.textContent = "You Died";
} else if ((this.health - characterRandomAttack) <= 0) {
  for (var i; i < allMonsters.length; i++) {
    if (this.monsterId === allMonsters[i].monsterId) {
    allMonsters.splice(i, 1);
    console.log(allMonsters)
    var removeMonsterCell = document.getElementById(this.monsterId);
    removeMonsterCell.removeAttribute("id");
    roomDetect();
    }
  }
} else { 
  var displayCombatInforEl = document.getElementById('combat-info')
  displayCombatInforEl.innerHTML = '';
  var displayMonsterDescriptionP = document.createElement('p');
  displayMonsterDescriptionP.textContent = this.description;
  displayCombatInforEl.appendChild(displayMonsterDescriptionP);
  var displayCombatP = document.createElement('p');
  displayCombatP.textContent = (targetCharacter.name + ' is damaged by ' + this.name + '\'s Attack roll of ' + monsterRandomAttack + ' resulted in it only having ' +targetCharacter.health+ ' health left ! ' + this.name + ' is damaged by ' + targetCharacter.name + '\'s Attack roll of ' + characterRandomAttack + ' resulted in it only having ' + this.health+ ' health left ! ');
  displayCombatInforEl.appendChild(displayCombatP);  
} 

}
// Monster.prototype.displayDescription

var goblinDescription = 'A small green vile creature stands before you, and it engages you in combat with a spear!';
var bossDescription = 'A pale wizard with sunken eyes in a pitch black robe glares at you with murderous intent as he invokes arcane forces which may spell your DOOM!';

var goblin1 = new Monster('Goblin', 15, 30, 'goblin1', goblinDescription);
var goblin2 = new Monster('Goblin', 15, 30, 'goblin2', goblinDescription);
var boss = new Monster('Evil Wizard', 75, 50, 'boss', bossDescription);


