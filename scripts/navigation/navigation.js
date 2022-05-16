class Navigation {
  constructor() {
    this.navLinks = document.querySelectorAll("[data-navigation-link]");

    this.sections = document.querySelectorAll("[data-navigation-path]");

    this.options = {
      root: null,

      rootMargin: "0px",

      threshold: 0.9
    };
  }

  getNavLinkParent() {
    return this.navLinks[0].parentElement.parentElement;
  }

  getNavLinks() {
    return this.navLinks;
  }

  getNavSections() {
    return this.sections;
  }

  init() {
    this.clearNavLinksStyles();

    this.observeSections();
  }

  observeSections() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.getNavLinks().forEach((element) => {
            element.classList.remove("_active");
          });

          this.getNavLinks().forEach((element) => {
            if (
              element.dataset.navigationLink ===
              entry.target.dataset.navigationPath
            ) {
              element.classList.add("_active");
            }
          });
        }
      });
    }, this.options);

    this.sections.forEach((section) => {
      observer.observe(section);
    });
  }

  clearNavLinksStyles() {
    this.getNavLinks().forEach((element) => {
      element.classList.remove("_active");
    });
  }

  showNavigation() {
    this.getNavLinkParent().classList.add("_active");
  }

  hideNavigation() {
    this.getNavLinkParent().classList.remove("_active");
  }
}

export default Navigation;
