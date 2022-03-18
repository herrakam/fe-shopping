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
    this.dropbox.style.display = "flex";
  }
  hideDropbox() {
    this.dropbox.style.display = "none";
  }
  renderRecentSearch() {
    const recentSearch = `
    <div class="recent-search-text height-sort">최근 검색어</div>
    <div class="recent-search"></div>
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
