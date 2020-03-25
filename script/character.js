'use strict';

// this.xPosition and this.yPosition are hardcoded values
function Character(name, health, attack, xPosition, yPosition) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.xPosition = xPosition;
  this.yPosition = yPosition;
}

// add move to method to Character constructor
Character.prototype.moveTo = function(newXPosition, newYPosition) {
  //clear
  var characterEl = document.getElementById(this.name);
  characterEl.remove();
  //set new position
  this.xPosition = newXPosition;
  this.yPosition = newYPosition;
  //move to new position
  var testCell = document.getElementById('table').rows[this.yPosition].cells[this.xPosition];
  var spanEl = document.createElement('span');
  spanEl.setAttribute('id', this.name);
  spanEl.textContent = this.name;
  testCell.appendChild(spanEl);
};
