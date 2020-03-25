'use strict';
var allMonsters = [];
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
attackButton.style.display = "none";

// gameLoop();

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
  var testMonsterCell2 = document.getElementById('table').rows[3].cells[3];
  testMonsterCell.setAttribute('id', goblin1.monsterId);
  testMonsterCell2.setAttribute('id', boss.monsterId);

  move();
  roomDetect();

}

function roomDetect() {
  var currentCellEl = document.getElementById('table').rows[testCharacter.xPosition].cells[testCharacter.yPosition];
  if (currentCellEl.id) {
    removeEventListeners();
    for (var i = 0; i < allMonsters.length; i++) {
      if (currentCellEl.id === allMonsters[i].monsterId) {
        battleEvent(testCharacter, allMonsters[i]);
      }
    }
  } else {
      move();
    }
  console.log(currentCellEl.id + ' is monster in room')
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

//Handle movement
var moveUp = function(event) {
  event.preventDefault();
  var newX = testCharacter.xPosition;
  var newY = testCharacter.yPosition - 1;
  if(newY >= 0) {
    testCharacter.moveTo(newX, newY);
  }
  roomDetect();
}

var moveRight = function(event) {
  event.preventDefault();
  var newX = testCharacter.xPosition + 1;
  var newY = testCharacter.yPosition;
  if(newX < document.getElementById('table').getElementsByTagName('tr').length) {
    testCharacter.moveTo(newX, newY);
  }
  roomDetect();
}

var moveDown = function(event) {
  event.preventDefault();
  var newX = testCharacter.xPosition;
  var newY = testCharacter.yPosition + 1;
  if(newY < document.getElementById('table').getElementsByTagName('tr').length) {
    testCharacter.moveTo(newX, newY);
  }
  roomDetect();
}

var moveLeft = function(event) {
  event.preventDefault();
  var newX = testCharacter.xPosition - 1;
  var newY = testCharacter.yPosition;
  if(newX >= 0) {
    testCharacter.moveTo(newX, newY);
  }
  roomDetect();
}

// movement event listeners
function move() {
  console.log('move test')
  moveUpButton.addEventListener('click', moveUp);
  moveRightButton.addEventListener('click', moveRight);
  moveDownButton.addEventListener('click', moveDown);
  moveLeftButton.addEventListener('click', moveLeft);
 
}

function removeEventListeners() {
  console.log('removed event listener')
  moveUpButton.removeEventListener('click', moveUp);
  moveDownButton.removeEventListener('click', moveDown);
  moveLeftButton.removeEventListener('click', moveLeft);
  moveRightButton.removeEventListener('click', moveRight);
}

function battleEvent(character, monster) {
  attackButton.style.display = 'block';
  attackButton.addEventListener('click', function(event) {
    while (character.health > 0 || monster.health > 0) {
      var monsterRandomAttack = (Math.ceil(Math.random() * monster.attack));
      var characterRandomAttack = (Math.ceil(Math.random() * character.attack));
      console.log(characterRandomAttack, monsterRandomAttack, character.health, monster.health)
      character.health = (character.health - monsterRandomAttack);
      monster.health = (monster.health - characterRandomAttack);
      if(monster.health <= 0) {
        monster.monsterDeath();
        attackButton.style.display = "none";
        break;
      }
      if(character.health <= 0) {
        deathDisplay();
        attackButton.style.display = "none";
        break;
      }
    }
  });
}


function deathDisplay() {
  var deathScreen = document.getElementsByTagName('body')[0];
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
  displayCombatP.textContent = (character.name + ' is damaged by ' + monster.name + '\'s Attack roll of ' + monsterRandomAttack + ' resulted in it only having ' + character.health+ ' health left ! ' + monster.name + ' is damaged by ' + character.name + '\'s Attack roll of ' + characterRandomAttack + ' resulted in it only having ' + monster.health+ ' health left ! ');
  displayCombatInfoEl.appendChild(displayCombatP);
}

gameLoop();
