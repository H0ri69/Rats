

document.addEventListener("DOMContentLoaded", (event) => {
  const header = document.querySelector(".header-div");
  const grids = document.querySelectorAll(".grid");
  const pricingDivs = document.querySelectorAll("#pricing-div");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    grids.forEach((grid) => {
      if (isElementInViewport(grid)) {
        grid.classList.add("visible");
      }
    });

    pricingDivs.forEach((div) => {
      if (isElementInViewport(div)) {
        div.classList.add("visible");
      }
    });
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
