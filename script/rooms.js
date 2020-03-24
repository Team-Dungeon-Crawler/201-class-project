'use strict';

// eslint-disable-next-line no-undef
var testCharacter = new Character('Test', 100, 40, 1, 1);
var goblin1 = new Monster('Goblin', 15, 30, 'goblin1', goblinDescription)

// hardcoded values
var xValue = 4;
var yValue = 4;
// buttons elements
var moveUpButton = document.getElementById('move-up');
var moveRightButton = document.getElementById('move-right');
var moveDownButton = document.getElementById('move-down');
var moveLeftButton = document.getElementById('move-left');

gameLoop();

function roomDetect() {
  var currentCellEl = document.getElementById('table').rows[testCharacter.xPosition].cells[testCharacter.yPosition];
  if (currentCellEl.id !== null) {
    removeEventListeners();
    for (var i = 0; i < allMonsters.length; i++) {
      if (currentCellEl.id === allMonsters[i].monsterId) {
        allMonsters[i].battle(testCharacter);
        // if(allMonsters[i].isActive === flase) {
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
