function openTab(event, tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show the selected tab content and add active class
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}
