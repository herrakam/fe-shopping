export default class SearchEngine {
  constructor($inputTag) {
    this.input = $inputTag;
    this.$dropbox = document.querySelector("#search-dropbox-id");
    this.recentSearchArr = [];
    this.$recentSearch = document.querySelector("#recent-search-id");
  }
  saveSearchingValue() {
    const inputValue = this.input.value;
    if (localStorage.length !== 0) {
      this.recentSearchArr = JSON.parse(localStorage.getItem("recentSearch"));
    }
    this.recentSearchArr.push(inputValue);
    localStorage.setItem("recentSearch", JSON.stringify(this.recentSearchArr));
  }
  async getSearchResult() {
    const response = await fetch("/data");
    const data = await response.json();
    const inputValue = this.input.value;
    for (const key in data) {
      if (key === inputValue) {
        this.renderSearchResult(data[key]);
      }
    }
  }
  renderSearchResult(data) {
    this.removeRecentSearch();
    data.map((value) => this.renderData(value));
  }
  renderRecentSearch() {
    let searchedValues;
    localStorage.length === 0
      ? (searchedValues = ["최근 검색어 기록이 없습니다."])
      : (searchedValues = JSON.parse(localStorage.getItem("recentSearch")));
    const sortedValuesArr = [...new Set(searchedValues)];
    sortedValuesArr.map((value) => this.renderData(value));
  }
  renderData(value) {
    const $searchedValue = document.createElement("div");
    $searchedValue.innerHTML = value.keyword;
    this.$recentSearch.appendChild($searchedValue);
  }

  deleteAllRecentSearch() {
    localStorage.clear();
    this.recentSearchArr = [];
    this.renderRecentSearch();
    this.hideDropbox();
  }

  showDropbox() {
    this.$dropbox.style.display = "flex";
  }
  hideDropbox() {
    this.$dropbox.style.display = "none";
  }

  removeRecentSearch() {
    while (this.$recentSearch.hasChildNodes()) {
      this.$recentSearch.removeChild(this.$recentSearch.firstChild);
    }
  }
}
