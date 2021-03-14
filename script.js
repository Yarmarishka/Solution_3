(function () {

// Массив имен
var names = ["Yaakov", "John", "Jen", "Jason", "Paul",
             "Frank", "Larry", "Paula", "Laura", "Jim"];

// Цикл для перебора элементов массива
for (var i = 0; i < names.length; i++) {

  // Смотрим очередной элемент массива и получаем первую букву в слове
  // Сразу приводим ее к нижнему регистру функцией toLowerCase()
  var firstLetter = names[i].charAt(0).toLowerCase();

  // Смотрим, какая это буква и в соответсвии с условием задачи
  // пишем либо "Hello ..." либо "Good Bay ..."
  // Но эти функции вызываем из разных объектов
  if (firstLetter === 'j') {
    byeSpeaker_main.speak(names[i]);
  } else {
    helloSpeaker_main.speak(names[i]) + " " + helloSpeaker_main.value_555;
  }
}

})();
