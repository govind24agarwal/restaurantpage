function setTabs() {
  const tabs = document.querySelectorAll("[data-target]");
  const targets = document.querySelectorAll("[data-content]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const targetContent = document.querySelector(
        `[data-content=${e.target.dataset.target}]`
      );
      tabs.forEach((tab) => tab.classList.remove("active"));
      targets.forEach((target) => target.classList.remove("active"));
      tab.classList.add("active");
      targetContent.classList.add("active");
    });
  });
}
export default setTabs;
