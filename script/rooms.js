'use strict';

// eslint-disable-next-line no-undef
var testCharacter = new Character('Test', 100, 40, 1, 1);

// hardcoded values
var xValue = 4;
var yValue = 4;

gameLoop();

function gameLoop() {

  renderTable(xValue, yValue);

  // put character in the cell
  var testCell = document.getElementById('table').rows[testCharacter.xPosition].cells[testCharacter.yPosition];
  var spanEl = document.createElement('span');
  spanEl.setAttribute('id', testCharacter.name);
  spanEl.textContent = testCharacter.name;
  testCell.appendChild(spanEl);
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

var moveUpButton = document.getElementById('move-up');
var moveRightButton = document.getElementById('move-right');
var moveDownButton = document.getElementById('move-down');
var moveLeftButton = document.getElementById('move-left');

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
