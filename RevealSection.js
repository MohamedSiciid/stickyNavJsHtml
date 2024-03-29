//Reveal sections section waxa weeye dhamaan content page ayaa section claass kuwada 
const allSection = document.querySelectorAll('.section');

const revealSection = function (enteries, observe) {
  const [entry] = enteries;
  console.log(entry);

  if (!entry.isIntersecting) return;
//section--hidden waa css ka markaa ima waa soo muujinayaa marka lasoo dul istaago
  entry.target.classList.remove('section--hidden');
  observe.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
