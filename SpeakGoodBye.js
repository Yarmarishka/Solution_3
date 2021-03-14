(function(window) {
  var byeSpeaker = {};

  var speakWord = "Good Bye";

  // Функция для вывода нашего сообщения с приветсвием
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker_main = byeSpeaker;
})(window);
