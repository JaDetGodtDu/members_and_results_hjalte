let selectedTab = null;

function initTabs() {
  document.querySelectorAll("#tabs h2").forEach( tab => tab.addEventListener("click", selectTab) );
  document.querySelector("#tabs h2").click();
}

function selectTab(event) {
  const tab = event.target;
  if(!tab.classList.contains("selected")) {
    if(selectedTab) {
      selectedTab.classList.remove("selected");
      document.querySelector(`#${selectedTab.dataset.tabShow}`).classList.add("hide");
    }
    tab.classList.add("selected");
    document.querySelector(`#${tab.dataset.tabShow}`).classList.remove("hide");

    selectedTab = tab;
  }
}

export {initTabs};