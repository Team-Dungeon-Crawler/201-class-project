'use strict';
var allMonsters = [];
var battleArray = [];
var displayBattleLog = document.getElementById('displayBattleLog');
// eslint-disable-next-line no-undef
var testCharacter = new Character('Test', 100, 40, 1, 1);
var goblin1 = new Monster('Goblin', 1, 30, 'goblin1', 'goblinDescription');
var boss = new Monster('Evil Wizard', 75, 30, 'boss', 'bossDescription');


// hardcoded values
var xValue = 4;
var yValue = 4;
// buttons elements
var moveUpButton = document.getElementById('move-up');
var moveRightButton = document.getElementById('move-right');
var moveDownButton = document.getElementById('move-down');
var moveLeftButton = document.getElementById('move-left');
var attackButton = document.getElementById('attack');

gameLoop();

function roomDetect() {
  var currentCellEl = document.getElementById('table').rows[testCharacter.xPosition].cells[testCharacter.yPosition];
  if (currentCellEl.id !== null) {
    removeEventListeners();
    for (var i = 0; i < allMonsters.length; i++) {
      if (currentCellEl.id === allMonsters[i].monsterId) {
        battleEvent();
        // if(allMonsters[i].isActive === false) {
        //   move();
        // }
      }
    }
  } else {
      move();
  }
}

function removeEventListeners() {
  moveUpButton.removeEventListener();
  moveDownButton.removeEventListener();
  moveLeftButton.removeEventListener();
  moveRightButton.removeEventListener();
}

function gameLoop() {

  renderTable(xValue, yValue);

  // put character in the cell
  var testCell = document.getElementById('table').rows[testCharacter.xPosition].cells[testCharacter.yPosition];
  var spanEl = document.createElement('span');
  spanEl.setAttribute('id', testCharacter.name);
  spanEl.textContent = testCharacter.name;
  testCell.appendChild(spanEl);

  // put monster in the cell
  var testMonsterCell = document.getElementById('table').rows[2].cells[2];
  // var spanMonsterEl = document.createElement('span');
  testMonsterCell.setAttribute('id', goblin1.monsterId);
  // spanMonsterEl.textContent = goblin1.name;
  // testMonsterCell.appendChild(spanMonsterEl);

  move();
  roomDetect();

}

function renderTable(xNumberOfCells, yNumberOfCells) {
  var table = document.getElementById('table');
  table.innerHTML = '';
  for(var i = 0; i < xNumberOfCells; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < yNumberOfCells; j++) {
      var cell = document.createElement('td');
      // cell.setAttribute('id', i + ',' + j);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

function move() {

  moveUpButton.addEventListener('click', function(event) {
    event.preventDefault();
    var newX = testCharacter.xPosition;
    var newY = testCharacter.yPosition - 1;
    if(newY >= 0) {
      this.moveTo(newX, newY);
    }
  });

  moveRightButton.addEventListener('click', function(event) {
    event.preventDefault();
    var newX = testCharacter.xPosition + 1;
    var newY = testCharacter.yPosition;
    if(newX < document.getElementById('table').getElementsByTagName('tr').length) {
      this.moveTo(newX, newY);
    }
  });

  moveDownButton.addEventListener('click', function(event) {
    event.preventDefault();
    var newX = testCharacter.xPosition;
    var newY = testCharacter.yPosition + 1;
    if(newY < document.getElementById('table').getElementsByTagName('tr').length) {
      testCharacter.moveTo(newX, newY);
    }
  });

  moveLeftButton.addEventListener('click', function (event) {
    event.preventDefault();
    var newX = testCharacter.xPosition - 1;
    var newY = testCharacter.yPosition;
    if(newX >= 0) {
      testCharacter.moveTo(newX, newY);
    }
  });
}

function storeBattleLog() {
  localStorage.setItem("battleEvent", JSON.stringify(battleArray));
}
console.log(localStorage);

function battleEvent(character, monster) {
  attackButton.addEventListener('click', function(event) {
    while (character.health > 0 || monster.health <= 0) {
      var monsterRandomAttack = (Math.ceil(Math.random() * monster.attack));
      var characterRandomAttack = (Math.ceil(Math.random() * character.attack));
      character.health = (character.health - monsterRandomAttack);
      monster.health = (monster.health - characterRandomAttack);
      if(monster.health <= 0) {
        monster.monsterDeath();
      }
      if(character.health <= 0) {
        deathDisplay();
      }
    } 
  });
  attackButton.removeEventListener();
}

function deathDisplay() {
  var deathScreen = document.getElementsByTagName('body');
  deathScreen.setAttribute('id', 'deathScreen');

  deathScreen.innerHTML = '';
  deathScreen.style.backgroundColor = "black"

  var deathContainer = document.createElement('section');
  deathContainer.setAttribute('id', 'deathContainer');
  deathScreen.appendChild(deathContainer);

  var deathMessage = document.createElement('h1');
  deathMessage.setAttribute('id', 'deathMessage');

  deathMessage.textContent = "YOU DIED";
  deathContainer.appendChild(deathMessage);

  var resetButton = document.createElement('div');
  resetButton.setAttribute('id', 'reset');
  resetButton.innerHTML = '<button onclick="location.reload();">Click here to try again!</button>'
  deathContainer.appendChild(resetButton);

}

function victoryDisplay() {

    var victoryScreen = document.getElementsByTagName('body')[0];
    victoryScreen.setAttribute('id', 'victoryScreen');
    victoryScreen.innerHTML = '';
    victoryScreen.style.backgroundColor = "dfcdc3";

    var victoryContainer = document.createElement('section');
    victoryContainer.setAttribute('id', 'victoryContainer');
    victoryScreen.appendChild(victoryContainer);
  
    var victoryMessage = document.createElement('h1');
    victoryMessage.setAttribute('id', 'victoryMessage');
    victoryMessage.textContent = "Congratulations! You beat The Dungeon!";
    victoryContainer.appendChild(victoryMessage);
  
    var newGame = document.createElement('div');
    newGame.setAttribute('id', 'new-game');
    newGame.innerHTML = '<button onclick="location.reload();">Click to challenge The Dungeon again!</button>'
    victoryContainer.appendChild(newGame);


}

function displayCombat(character, monster) {
  var displayCombatInfoEl = document.getElementById('combat-info')
  displayCombatInfoEl.innerHTML = '';
  var displayMonsterDescriptionP = document.createElement('p');
  displayMonsterDescriptionP.textContent = this.description;
  displayCombatInfoEl.appendChild(displayMonsterDescriptionP);
  var displayCombatP = document.createElement('p');
  var displayText = (character.name + ' is damaged by ' + monster.name + '\'s Attack roll of ' + monsterRandomAttack + ' resulted in it only having ' + character.health+ ' health left ! ' + monster.name + ' is damaged by ' + character.name + '\'s Attack roll of ' + characterRandomAttack + ' resulted in it only having ' + this.health+ ' health left ! ');
  displayCombatP.textContent = displayText;
  displayCombatInfoEl.appendChild(displayCombatP);
  battleArray.push(displayText);
  storeBattleLog();
}

gameLoop();