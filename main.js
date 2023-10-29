const faqItems = document.getElementsByClassName("faq-item-header");

let activeFaqItem = null;

for (let a = 0; a < faqItems.length; a++) {
  faqItems[a].addEventListener("click", function () {
    const id = this.getAttribute("id");
    const content = document.getElementById(`${id}-content`); //
    const icon = this.getElementsByTagName("img")[0];

    if (activeFaqItem === id) {
      activeFaqItem = null;
      content.classList.remove("faq-item-content-visible");
      icon.classList.remove("faq-icon-visible");
    } else {
      if (activeFaqItem) {
        document
          .getElementById(`${activeFaqItem}-content`)
          .classList.remove("faq-item-content-visible");
        document
          .getElementById(activeFaqItem)
          .getElementsByTagName("img")[0]
          .classList.remove("faq-icon-visible");
      }

      activeFaqItem = id;
      content.classList.add("faq-item-content-visible");
      icon.classList.add("faq-icon-visible");
    }
  });
}

// mob menu
const menu = document.getElementById("burger");
const close = document.getElementById("close");
const mobileMenu = document.getElementById("mobile-navigation");

menu.addEventListener("click", function () {
  mobileMenu.classList.add("mobile-navigation-open");
});

close.addEventListener("click", function () {
  mobileMenu.classList.remove("mobile-navigation-open");
});

// menu

const navigationItems = document.getElementsByClassName("menu-item");
const navigationContainer =
  document.getElementsByClassName("main-navigation")[0];

for (let a = 0; a < navigationItems.length; a++) {
  navigationItems[a].addEventListener("click", function () {
    mobileMenu.classList.remove("mobile-navigation-open");

    const elementId = this.dataset.link;

    window.scrollTo({
      top:
        document.getElementById(elementId).offsetTop -
        navigationContainer.clientHeight,
      behavior: "smooth",
    });

    //toggleMobileMenu()
  });
}

// mini-slider

const points = document.getElementsByClassName("point");
let activePointId = "first-point";

for (let a = 0; a < points.length; a++) {
  points[a].addEventListener("click", function () {
    const id = this.id;

    if (activePointId !== id) {
      document.getElementById(activePointId).classList.remove("active");
      this.classList.add("active");

      if (id === "second-point") {
        document
          .getElementsByClassName("block-image-5")[0]
          .classList.add("block-image-5-next");
      } else {
        document
          .getElementsByClassName("block-image-5")[0]
          .classList.remove("block-image-5-next");
      }

      activePointId = id;
    }
  });
}
