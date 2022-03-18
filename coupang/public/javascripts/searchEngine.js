export default class SearchEngine {
  constructor($inputTag) {
    this.inputTag = $inputTag;
    this.dropbox = document.querySelector("#search-dropbox-id");
  }
  getSearchingValue() {
    const inputValue = this.inputTag.value;
    return inputValue;
  }
  showDropbox() {
    this.dropbox.style.display = "block";
  }
  hideDropbox() {
    this.dropbox.style.display = "none";
  }
}
