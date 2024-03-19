//waa header ka guud ee nav ka
const header = document.querySelector(".header");
//waa subHeader nav oo dhamaan nav ku dhex jira waana la calculate garaynaya height kiisa
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // halkan waxa weeye height ka nav oo daynamic ah kolba intuu yahay noqonaya
});

headerObserver.observe(header);
