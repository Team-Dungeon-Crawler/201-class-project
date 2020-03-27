'use strict';

export { Character };

// this.xPosition and this.yPosition are hardcoded values
function Character(name, health, attack, xPosition, yPosition, characterImgSrc) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.xPosition = xPosition;
  this.yPosition = yPosition;
  this.characterImgSrc = characterImgSrc;
  this.characterImgAlt = name;
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
  var imgEl = document.createElement('img');
  imgEl.setAttribute('id', this.name);
  imgEl.setAttribute('src', this.characterImgSrc);
  imgEl.setAttribute('alt', this.characterImgAlt);
  testCell.appendChild(imgEl);
};
