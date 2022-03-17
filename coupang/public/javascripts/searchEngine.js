export default class SearchEngine {
  constructor($inputTag) {
    this.inputTag = $inputTag;
  }
  getSearchingValue() {
    const inputValue = this.inputTag.value;
    console.log(inputValue);
  }
}
