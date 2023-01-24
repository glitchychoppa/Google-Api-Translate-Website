class UI {
  TranslateText(newtext) {
    const text = document.getElementById("outputWord");
    text.innerText = newtext
  }

  ClearInput(input) {
    if (input != "") input.value = "";
  }
}

const uiclass = new UI();

