'use strict';

export { Character };

function Character(name, health, attack, xPosition, yPosition, characterImgSrc) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.xPosition = xPosition;
  this.yPosition = yPosition;
  this.characterImgSrc = characterImgSrc;
  this.characterImgAlt = name;
}

// add movement method to Character constructor
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
