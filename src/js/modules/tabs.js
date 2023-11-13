const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach((el) => {
      el.style.display = "none";
    });

    tab.forEach((el) => {
      el.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    content[i].style.display = "block";
    tab[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tab.forEach((el, i) => {
        if (target === el || target.parentNode === el) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;
