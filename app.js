// API  https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|it

// Prototype Ajax Callback
const translate = new Translate();
const ui = new UI();

function AddEventListeners() {
  const element = document.getElementById("translate-form");
  element.addEventListener("submit", TranslateWord);
  document.getElementById("language").onchange = function () {};
}

AddEventListeners();

function TranslateWord(e) {
  const input = document.getElementById("word");
  const text = input.value;
  console.log(typeof text)
  if (typeof text === 'string') {
    translated.TranslateData(text)
    ui.ClearInput(input)
  } 

  e.preventDefault();
}
