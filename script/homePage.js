/* eslint-disable no-undef */
'use strict';

import { Character } from './character.js';
import { Monster } from './monsters.js';

// characters objects
var character1 = new Character('Warrior', 150, 20, 1, 1, 'images/warrior.png');
var character2 = new Character('Rogue', 125, 30, 1, 1, 'images/rogue.png');
var character3 = new Character('Wizard', 100, 40, 1, 1, 'images/wizard.png');
var allCharacters = [character1, character2, character3];

// monsters descriptions
var goblinratDescription = 'A grotesque hairless mutated tumorous dog-sized rat is known as a Goblin-rat. As a trained attack and guard animal used by Goblins it stands before you, and engages you in combat with its diseased teeth!!';
var goblinDescription = 'A squat small green skinned vile barely humanoid creature with a long hooked nose and bat-like ears stands before you, and it snarls as it engages you in combat with a spear!';
var hobgoblinDescription = 'A cruelly predatory bestial humanoid creature with a catlike blue nose, eyes, mane, and claws wearing scale armor and helm stands before you, and growls with disciplined fury as it engages you in combat with a long sword and shield!';
var bugbearDescription = 'A bear-like fury squat-faced humanoid wearing leather armor stands before you, and bellows in rage as it engages you in combat with a massive two-handed axe!';
var firebatDescription = 'A dog-sized fiendish otherworldly bat wreathed in a aura of fire flits in the room about you, engaging you in combat by spitting a gouts of flame!!';
var healingFairyDescription = 'A hummingbird-sized little blue-skinned humanoid with dragonfly wings buzzes erratically around the room in a very difficult to hit manner. Knowing that it is the legendary Healing Fairy whose very lifeblood is healing magic and that if you attack and defeat it, it will instinctively project healing at you, you engage it in combat...';
var bossDescription = 'A pale wizard with sunken eyes in a pitch black robe glares at you with murderous intent as he invokes arcane forces which may spell your DOOM!!!';

// monsters objects
var boss = new Monster('Evil Wizard', 60, 35, 'boss', bossDescription);
var goblinrat1 = new Monster('Goblin-rat', 1, 5, 'goblinrat1', goblinratDescription);
var goblinrat2 = new Monster('Goblin-rat', 1, 5, 'goblinrat2', goblinratDescription);
var goblinrat3 = new Monster('Goblin-rat', 1, 5, 'goblinrat3', goblinratDescription);
var goblinrat4 = new Monster('Goblin-rat', 1, 5, 'goblinrat4', goblinratDescription);
var goblinrat5 = new Monster('Goblin-rat', 1, 5, 'goblinrat5', goblinratDescription);
var goblin1 = new Monster('Goblin', 30, 10, 'goblin1', goblinDescription);
var goblin2 = new Monster('Goblin', 30, 10, 'goblin2', goblinDescription);
var goblin3 = new Monster('Goblin', 30, 10, 'goblin3', goblinDescription);
var goblin4 = new Monster('Goblin', 30, 10, 'goblin4', goblinDescription);
var goblin5 = new Monster('Goblin', 30, 10, 'goblin5', goblinDescription);
var hobgoblin1 = new Monster('Hobgoblin', 60, 10, 'hobgoblin1', hobgoblinDescription);
var hobgoblin2 = new Monster('Hobgoblin', 60, 10, 'hobgoblin2', hobgoblinDescription);
var hobgoblin3 = new Monster('Hobgoblin', 60, 10, 'hobgoblin3', hobgoblinDescription);
var hobgoblin4 = new Monster('Hobgoblin', 60, 10, 'hobgoblin4', hobgoblinDescription);
var hobgoblin5 = new Monster('Hobgoblin', 60, 10, 'hobgoblin5', hobgoblinDescription);
var bugbear1 = new Monster('Bugbear', 40, 15, 'bugbear1', bugbearDescription);
var bugbear2 = new Monster('Bugbear', 40, 15, 'bugbear2', bugbearDescription);
var bugbear3 = new Monster('Bugbear', 40, 15, 'bugbear3', bugbearDescription);
var bugbear4 = new Monster('Bugbear', 40, 15, 'bugbear4', bugbearDescription);
var bugbear5 = new Monster('Bugbear', 40, 15, 'bugbear5', bugbearDescription);
var firebat1 = new Monster('Firebat', 5, 20, 'firebat1', firebatDescription);
var firebat2 = new Monster('Firebat', 5, 20, 'firebat2', firebatDescription);
var firebat3 = new Monster('Firebat', 5, 20, 'firebat3', firebatDescription);
var firebat4 = new Monster('Firebat', 5, 20, 'firebat4', firebatDescription);
var firebat5 = new Monster('Firebat', 5, 20, 'firebat5', firebatDescription);
var healingFairy1 = new Monster('Healing Fairy', 100, -15, 'healingFairy1', healingFairyDescription);
var healingFairy2 = new Monster('Healing Fairy', 100, -15, 'healingFairy2', healingFairyDescription);

var allMonsters = [
  goblinrat1, goblinrat2, goblinrat3, goblinrat4, goblinrat5,
  goblin1, goblin2, goblin3, goblin4, goblin5,
  hobgoblin1, hobgoblin2, hobgoblin3, hobgoblin4, hobgoblin5,
  bugbear1, bugbear2, bugbear3, bugbear4, bugbear5,
  firebat1, firebat2, firebat3, firebat4, firebat5,
  healingFairy1, healingFairy2];


var formEl = document.getElementById('form');
formEl.addEventListener('submit', handleStartButton);

function handleStartButton(event) {
  event.preventDefault();
  getCharacter();
  getCoordinates();
  getMonsters();
  window.location = 'map.html';
}

function getCharacter() {
  var charactersSelectorEl = document.getElementById('characters');
  for (var i = 0; i < allCharacters.length; i++) {
    if(allCharacters[i].name === charactersSelectorEl.value) {
      localStorage.character = JSON.stringify(allCharacters[i]);
    }
  }
}

function getCoordinates() {
  var levelsSelectorEl = document.getElementById('levels');
  var levelValue = levelsSelectorEl.value;
  if(levelValue === 'easy') {
    localStorage.coordinates = 3;
  }
  if (levelValue === 'medium') {
    localStorage.coordinates = 5;
  }
  if (levelValue === 'hard') {
    localStorage.coordinates = 7;
  }
}

function getMonsters() {
  var levelsSelectorEl = document.getElementById('levels');
  var levelValue = levelsSelectorEl.value;
  var monsters = generateMonsters(levelValue);
  localStorage.monsters = JSON.stringify(monsters);
}

function generateMonsters(level) {
  var monstersOnBoard = [];
  if(level === 'easy') {
    monstersOnBoard = generateRandomNumberOfMonsters(3);
  }
  if (level === 'medium') {
    monstersOnBoard = generateRandomNumberOfMonsters(9);
  }
  if (level === 'hard') {
    monstersOnBoard = generateRandomNumberOfMonsters(13);
  }
  return monstersOnBoard;
}

function generateRandomNumberOfMonsters(expectedNumber) {
  var monsters = [];
  var randomMonsters = getRandom(allMonsters, expectedNumber - 1);
  monsters.push(randomMonsters);
  return monsters;
}

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  result.push(boss);
  return result;
}

function detectBattleEventStorage() {
  var storedBattleEvent = localStorage.getItem('battleEvent');
  if (storedBattleEvent) {
    var battleArray = JSON.parse(storedBattleEvent);
    displayBattleLogList(battleArray);
  }
}

function displayBattleLogList(battleArray) {
  var displayBattleLogEl = document.getElementById('displayBattleLog');
  for (var resultIndex = 0; resultIndex < battleArray.length; resultIndex++) {
    var displayBattleLog = battleArray[resultIndex];
    var updateBattleLog = document.createElement('li');
    var rewriteContentToList = displayBattleLog;
    updateBattleLog.textContent = rewriteContentToList;
    displayBattleLogEl.appendChild(updateBattleLog);
  }
}

detectBattleEventStorage();

