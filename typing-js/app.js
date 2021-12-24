// Class TypeWriter
class TypeWriter {
  constructor(typeElement, words, wait = 3000) {
    // Element of HTML
    this.typeElement = typeElement;
    this.words = words;

    // Variables need
    this.text = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;

    // Function
    this.typing();
  }

  // Function typing()
  typing() {
    // Current index of word
    const current = this.wordIndex % this.words.length;

    // Get text of words array with wordIndex
    let getText = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove character
      this.text = getText.substring(0, this.text.length - 1);
    } else {
      // Add character
      this.text = getText.substring(0, this.text.length + 1);
    }

    // Initial type speed
    let typeSpeed = 500;

    // If word completed
    if (!this.isDeleting && this.text === getText) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set is deleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === "") {
      // Set is deleting to false
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
    }

    // Render typing
    this.typeElement.innerHTML = this.text;

    setTimeout(() => this.typing(), typeSpeed);
  }
}

let typeEl = document.getElementById("type");
let typeData = JSON.parse(typeEl.getAttribute("data-type"));

new TypeWriter(typeEl, typeData, 2000);
