export default class SearchEngine {
  constructor($inputTag) {
    this.inputTag = $inputTag;
    this.$dropbox = document.querySelector("#search-dropbox-id");
    this.recentSearchArr = [];
    this.$recentSearch = document.querySelector("#recent-search-id");
  }
  saveSearchingValue() {
    const inputValue = this.inputTag.value;
    if (localStorage.length !== 0) {
      this.recentSearchArr = JSON.parse(localStorage.getItem("recentSearch"));
    }
    this.recentSearchArr.push(inputValue);
    localStorage.setItem("recentSearch", JSON.stringify(this.recentSearchArr));
  }
  renderSearchingValue() {
    let searchedValues;
    localStorage.length === 0
      ? (searchedValues = ["최근 검색어 기록이 없습니다."])
      : (searchedValues = JSON.parse(localStorage.getItem("recentSearch")));
    const sortedValuesArr = [...new Set(searchedValues)];
    sortedValuesArr.map((value) => {
      const $searchedValue = document.createElement("div");
      $searchedValue.innerHTML = value;
      this.$recentSearch.appendChild($searchedValue);
    });
  }

  deleteAllRecentSearch() {
    localStorage.clear();
    this.renderSearchingValue();
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
