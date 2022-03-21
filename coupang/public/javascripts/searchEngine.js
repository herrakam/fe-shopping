export default class SearchEngine {
  constructor($inputTag) {
    this.inputTag = $inputTag;
    this.dropbox = document.querySelector("#search-dropbox-id");
    this.count = 0;
  }
  saveSearchingValue() {
    const inputValue = this.inputTag.value;
    localStorage.setItem(`searchingValue${this.count}`, inputValue);
    localStorage.getItem("searchingValue");
    this.count++;
  }
  renderSearchingValue() {
    const $recentSearch = document.querySelector("#recent-search-id");
    const searchedValues = [];
    for (let i = 0; i < localStorage.length; i++) {
      const searchedValue = localStorage.getItem(`searchingValue${i}`);
      searchedValues.push(searchedValue);
    }
    const sortedValuesArr = [...new Set(searchedValues)];
    sortedValuesArr.map((value) => {
      const $searchedValue = document.createElement("div");
      $searchedValue.innerHTML = value;
      $recentSearch.appendChild($searchedValue);
    });
  }
  showDropbox() {
    this.dropbox.style.display = "flex";
  }
  hideDropbox() {
    this.dropbox.style.display = "none";
  }
  renderRecentSearch() {
    const recentSearch = `
    <div class="recent-search-text height-sort">최근 검색어</div>
    <div class="recent-search" id="recent-search-id"></div>
    <div class="recent-search-btns height-sort">
        <div class="all-clear">전체 삭제</div>
        <div class="turnoff-recent-search">최근 검색어 끄기</div>
    </div>`;
    this.dropbox.insertAdjacentHTML("afterbegin", recentSearch);
  }
  removeRecentSearch() {
    while (this.dropbox.hasChildNodes()) {
      this.dropbox.removeChild(this.dropbox.firstChild);
    }
  }
}
