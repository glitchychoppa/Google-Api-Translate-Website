class Translate {

  TranslateData(word) {
    this.key = "AIzaSyC8r269rGfSUHJPhCEhqP3NCUk8WT-X_Vo";
    this.word = word;
    this.xhr = new XMLHttpRequest();
    this.LangControl()
  }

  LangControl() {
    const langcontrolapi = `https://translation.googleapis.com/language/translate/v2/detect?key=${this.key}&q=${this.word}`;
    this.xhr.open("GET", langcontrolapi);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        let text = JSON.parse(this.xhr.responseText)
        this.newlang = text.data.detections[0][0].language
        translated.TranslateWord() // Senkron bir islem 
      }
      };
    this.xhr.send();
  }
  
  async TranslateWord() {
    const api = `https://translation.googleapis.com/language/translate/v2?key=${this.key}&source=${this.newlang}&model=base&q=${this.word}&target=tr`;
    this.xhr.open('GET', api)
      this.xhr.onload = () => {
        if (this.xhr.status === 200) {
          const text = JSON.parse(this.xhr.responseText)
          const compulate = text.data.translations[0].translatedText  
          if (typeof compulate === 'string') {
            ui.TranslateText(compulate)         }
        } else {
          ui.TranslateText('Cevirmek istediginiz kelime bulunmadi')
        }
      }
    this.xhr.send()
  }
}

const translated = new Translate();


