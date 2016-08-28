var Typo = require("typo-js");
var dictionary = new Typo("en_US");
/*var Typo = require("./node_modules/typo-js/typo.js");
//var dictionary = new Typo("en_US", false, false, {
//  dictionaryPath: "./node_modules/typo-js/dictionaries"
//});*/

function isAlphabet(char) {
  return ((65 <= char) && (char <= 90) || ((97 <= char) && (char <= 122)));
};

function checkSpell(input) {
  //input = input.trim();

  var words = [];

  var l = -1,
    r = 0;

  for (r in input) {
    console.log(r);
    console.log(input[r]);
    if (!isAlphabet(input.charCodeAt(r))) {
      if (l != -1) {
        words.push(input.substr(l, r - l));
        l = -1;
      };
      words.push(input[r]);
    } else {
      if (l == -1) l = r;
    };

  };
  console.log(words);
  if (l != -1) {
    words.push(input.substr(l));
    l = -1;
  };

  var suggestWords = [];

  for (var i in words) {
    console.log(i);
    if (!isAlphabet(words[i].charCodeAt(0))) {
      suggestWords.push(words[i]);
    } else {
      if (dictionary.check(words[i])) {
        suggestWords.push(words[i]);
      } else {
        suggestWords.push(words[i].fontcolor("red"));
      };
    };
    console.log(suggestWords[i]);
  };
  console.log(suggestWords);
  return suggestWords;
};

//console.log(checkSpell(" How are yoi  tuday? "));



exports.checkSpell = checkSpell;

