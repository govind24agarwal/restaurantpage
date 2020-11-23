function setTabs() {
  const tabs = document.querySelectorAll("[data-target]");
  const contents = document.querySelectorAll("[data-content]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const target = document.querySelector(
        `[data-content=${e.target.dataset.target}]`
      );
      contents.forEach((content) => content.classList.remove("active"));
      target.classList.add("active");
    });
  });
}
export default setTabs;
